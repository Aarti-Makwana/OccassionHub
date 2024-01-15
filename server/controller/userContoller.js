import mailer from "./mailer.js";
import usermodel from "../model/usermodel.js";
import venueRegistration from "../model/venueRegistration.js";
import djRegistrationModel from "../model/djRegistrationModel.js";
import catererRegistrationModel from "../model/catererRegistrationModel.js";
import contactModel from "../model/contactModel.js";
import jwt from 'jsonwebtoken';
import stripe from 'stripe';
import bcrypt from 'bcrypt';
// import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import decorationRegistrationModel from "../model/decorationRegistrationModel.js";
dotenv.config();
const { USER_SECRET_KEY } = process.env;
const stripeInstance = stripe(USER_SECRET_KEY);
const maxAge = 10 * 24 * 60 * 60;
var SECRET_KEY = "thisisusersecretkey";
export const userotpContoller = async (request, response) => {
    try {
        const { email } = request.body;
        console.log("email : ", request.body.email)

        mailer(email, (status, Rotp) => {

            if (status) {
                console.log("email send")
                console.log("otp : " + Rotp);
                response.status(201).json({ status: true, Rotp: Rotp });
            } else {
                console.log("Error in user OTP generation : ")

                // console.error("Error in user OTP generation: ", error);
                response.status(500).json({ status: false });
            }
        });
    } catch (error) {
        console.error("Error in user OTP generation controller: ", error);
        response.status(500).json({ status: false });
    }
}
export const userRegistration = async (request, response) => {
    var payload = {};
    try {
        console.log("request.body : ", request.body);
        const { name, email, password, contect, address } = request.body
        // var data =  usermodel.create(request.body)

        const newUser = await usermodel.create({
            email: email,
            name: name,
            password: await bcrypt.hash(password, 10),
            contect: contect,
            address: address,
        });
        console.log("newUser : ", newUser);
        payload.user = request.body;
        const expiryTime = {
            expiresIn: '1d'
        }
        const token = jwt.sign(payload, SECRET_KEY, expiryTime);
        response.cookie('user', token, { httpOnly: true, maxAge: 86400 * 1000 });
        response.cookie('userRegistrationData', newUser.email, { maxAge: 86400 * 1000 });

        await newUser.save();
        response.status(201).json({ newUser: newUser, token: token });
        console.log("expiryTime : ", expiryTime);
        console.log("token : ", token);
        console.log("registration ho gya")
    } catch (error) {
        console.error("Error in user registration controller: ", error);
        response.status(500).json({ status: false });
    }
}

export const userLoginController = async (request, response) => {
    const { email, password } = request.body;
    console.log("email : ", email);
    console.log("password : ", password)
    try {
        var expireTime = { expiresIn: '1d' };
        var token = jwt.sign({ _id: email }, USER_SECRET_KEY, expireTime);

        if (!token)
            response.status(500).json({ message: "Error while generating token inside user login" });
        var userObj = await usermodel.findOne({ email: email });
        var userPassword = userObj.password;
        var status = await bcrypt.compare(password, userPassword);
        console.log(status);
        if (status) {
            console.log("scesfully password bcrypt");
            response.status(201).json({ email: email, token: token, message: "login sucefully" });
        }
        else {
            console.log("error in bcrypt controller");
            response.status(203).json({ message: "Error In User Login " });
        }
    } catch (error) {
        console.log("Error in user login controller : " + error);
        response.status(203).json({ message: "Error while Login" });
    }
}
export const updateUserProfileController = async (request, response) => {
    console.log("User Update Profile data -->", request.body);
    const { Id, name, contect, address } = request.body;
    console.log("iddd   : ", Id)

    try {
        const result = await usermodel.updateOne({ _id: Id }, { $set: { name, contect, address } });
        console.log("result on controller : ", result);
        if (result) {
            console.log("User profile updated successfully");
            response.status(201).json({ message: 'User profile updated successfully' });
        } else {
            console.log("User not found or no changes made");
            response.status(404).json({ error: 'User not found or no changes made' });
        }
    } catch (error) {
        console.log("Error while updating user profile on controller ", error);
        response.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};

export const contactController = async (request, response) => {
    const { name, userEmailcontect, subject, Massage } = request.body;
    try {
        console.log("request.body---------->", request.body);
        var contact = await contactModel.create({
            name: name,
            email: userEmailcontect,
            subject: subject,
            Massage: Massage
        });
        await contact.save();
        console.log(" contact Data <...............> : ", contact);
        response.status(201).json({ contact: contact });
    } catch (error) {
        console.log("error in contact controller" + error);
        response.status(500).json({ status: false });
    }
}

export const staffLoginController = async (request, response) => {
    console.log("request.body :=========>  ", request.body);
    const { email, password, serviesType } = request.body;
    try {
        if (serviesType == "venue") {
            var userObj = await usermodel.findOne({ email: email });
            var vuserData = await venueRegistration.find({ venueEmail: userObj.email })
            if (vuserData) {
                var userPassword = userObj.password;
                var status = await bcrypt.compare(password, userPassword);
                console.log(status);
                if (status) {
                    // alert("password and email find...!!")
                    console.log("scesfully password bcrypt");
                    response.status(201).json({ vuserData: vuserData, message: "login sucefully" });
                } else {
                    // alert("password and email not find...!!")
                    console.log("error in bcrypt controller");
                    response.status(500).json({ message: "Error In venue Login " });
                }
            } else {
                console.log("data not find controller");
                response.status(500).json({ message: "Error In venue Login " });
            }

        }else if(serviesType =="caterer"){
            var userObj = await usermodel.findOne({ email: email });
            var catereruserData = await catererRegistrationModel.find({ catererEmail: userObj.email })
            if (catereruserData) {
                var userPassword = userObj.password;
                var status = await bcrypt.compare(password, userPassword);
                console.log(status);
                if (status) {
                    console.log("scesfully password bcrypt");
                    response.status(201).json({ vuserData: vuserData, message: "login sucefully" });
                } else {
                    console.log("error in bcrypt controller");
                    response.status(500).json({ message: "Error In caterer Login " });
                }
            } else {
                console.log("data not find  caterer staff controller");
                response.status(500).json({ message: "Error In caterer Login " });
            }
        }
        else if(serviesType =="Decoration"){
            var userObj = await usermodel.findOne({ email: email });
            var DecorationuserData = await decorationRegistrationModel.find({ DecorationEmail: userObj.email })
            if (DecorationuserData) {
                var userPassword = userObj.password;
                var status = await bcrypt.compare(password, userPassword);
                console.log(status);
                if (status) {
                    console.log("scesfully password bcrypt");
                    response.status(201).json({ vuserData: vuserData, message: "login sucefully" });
                } else {
                    console.log("error in bcrypt controller");
                    response.status(500).json({ message: "Error In decration Login " });
                }
            } else {
                console.log("data not find  decoration staff controller");
                response.status(500).json({ message: "Error In decration Login " });
            }
        }
        else if(serviesType =="Dj"){
            var userObj = await usermodel.findOne({ email: email });
            var DjuserData = await djRegistrationModel.find({ DjEmail: userObj.email })
            if (DjuserData) {
                var userPassword = userObj.password;
                var status = await bcrypt.compare(password, userPassword);
                console.log(status);
                if (status) {
                    console.log("scesfully password bcrypt");
                    response.status(201).json({ vuserData: vuserData, message: "login sucefully" });
                } else {
                    console.log("error in bcrypt controller");
                    response.status(500).json({ message: "Error In dj Login " });
                }
            } else {
                console.log("data not find  dj staff controller");
                response.status(500).json({ message: "Error In dj Login " });
            }
        }
    } catch (error) {
        console.log("staff controller error");
        response.status(500).json({ status: false });
    }
}