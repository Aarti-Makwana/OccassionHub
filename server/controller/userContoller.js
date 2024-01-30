import { request, response } from "express";
import mailer from "./mailer.js";
import usermodel from "../model/usermodel.js";
import jwt from 'jsonwebtoken';
import stripe from 'stripe';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
const { USER_SECRET_KEY } = process.env;
const stripeInstance = stripe(USER_SECRET_KEY);
const maxAge = 10 * 24 * 60 * 60;
var SECRET_KEY = "thisisusersecretkey";
import passesModel from "../model/passesModel.js";
import customiseThaliModel from "../model/customiseThaliModel.js";
import requestedDjModel from "../model/requestedDjModel.js";
import djRegistrationModel from "../model/djRegistrationModel.js";


export const userotpContoller = async (request, response) => {
    try {

        const { email } = request.body;
        var data = await usermodel.findOne({ email: email });

        if (!data) {

            mailer(email, (status, Rotp) => {

                if (status) {
                    console.log("email send")
                    console.log("otp : " + Rotp);
                    response.status(201).json({ status: true, Rotp: Rotp });
                } else {
                    console.log("Error in user OTP generation : ")
                    response.status(500).json({ status: false });
                }
            });
        } else {
            console.log("email is already exists......!! ")
            response.status(501).json({ status: false });
        }
    } catch (error) {
        console.error("Error in user OTP generation controller: ", error);
        response.status(500).json({ status: false });
    }
}
export const userRegistration = async (request, response) => {
    var payload = {};
    try {
        const { name, email, password, contect, address } = request.body
        const newUser = await usermodel.create({
            email: email,
            name: name,
            password: await bcrypt.hash(password, 10),
            contect: contect,
            address: address,
        });
        payload.user = request.body;
        const expiryTime = {
            expiresIn: '1d'
        }
        const token = jwt.sign(payload, SECRET_KEY, expiryTime);
        response.cookie('user', token, { httpOnly: true, maxAge: 86400 * 1000 });
        response.cookie('userRegistrationData', newUser.email, { maxAge: 86400 * 1000 });

        await newUser.save();
        response.status(201).json({ newUser: newUser, token: token });
     
    } catch (error) {
        console.error("Error in user registration controller: ", error);
        response.status(500).json({ status: false });
    }
}

export const userLoginController = async (request, response) => {
    const { email, password } = request.body;
    try {
        var userObj = await usermodel.findOne({ email: email });
        var userPassword = userObj.password;

        var status = await bcrypt.compare(password, userPassword);
        
        if (status) {
            var expireTime = { expiresIn: '1d' };
            var token = jwt.sign({ _id: email }, USER_SECRET_KEY, expireTime);

            if (!token)
                response.status(500).json({ message: "Error while generating token inside user login" });
            
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
    const { Id, name, contect, address } = request.body;

    try {
        const result = await usermodel.updateOne({ _id: Id }, { $set: { name, contect, address } });
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
export const userCatrerDashboardContoller = async (request, response) => {
    const { email } = request.body;

    try {
        if (email) {
            var role = await usermodel.findOne({ email: email });
            if (role) {
                console.log("user Catrer Dashboard Contoller successfully");
                response.status(201).json(role);
            } else {
                console.log("User not found or no changes made");
                response.status(404).json({ error: 'User not found or no changes made' });
            }
        }
    } catch (error) {
        console.log("error on catrer profile controller ", error);
    }
}

export const userShowUpcomingEventContoller = async (request, response) => {
    try {
        var passes = await passesModel.find();

        response.status(201).json({ passes: passes });
    } catch (error) {
        console.error("Error in user Show upcoming event controller: ", error);
        response.status(500).json({ status: false });
    }
}

export const forgetPassOtpController = async (request, response) => {
    try {
        const { email } = request.body;
        var data = await usermodel.findOne({ email: email });       
        if(data){
            mailer(email, (status, Rotp) => {
                if (status) {
                    console.log("status"+status)
                    console.log("email send")
                    console.log("otp : " + Rotp);
                    response.status(201).json({ status: true, Rotp: Rotp });
                }else {
                    console.log("Error in user OTP generation : ")
                    response.status(500).json({ status: false });
                }
            });
        }
        else{
            console.log("email does not exist......!! ")
            response.status(201).json({ status: false});
        }
    } catch (error) {
        console.error("Error in user OTP generation controller: ", error);
        response.status(500).json({ status: false });
    }
}
export const forgotPasswordController = async (request, response) => {
    try {
        const { forgetemail, resetPass } = request.body;
        var data = await usermodel.updateOne({ email: forgetemail }, {
            $set: {
                password: await bcrypt.hash(resetPass, 10)
            }
        });
        response.status(201).json({message:"password update successfully",data:data})
    } catch (error) {
        response.status(500).json({message:"password not update successfully"})
    }
}
export const updateUserPasswordController = async (request, response) => {
    const { Id,newPasword,confirmPassword,oldPassword} = request.body;
    try {
        const data = await usermodel.findOne({_id:Id});
          var oldpassword1 =data.password;
        var status = await bcrypt.compare(oldPassword, oldpassword1);
        if(status){
        const result = await usermodel.updateOne({ _id: Id }, { $set: { password: await bcrypt.hash(newPasword, 10)}});
        if (result) {
            console.log("User profile updated successfully");
            response.status(201).json({ message: 'User profile updated successfully' });
        } else {
            console.log("User not found or no changes made");
            response.status(404).json({ error: 'User not found or no changes made' });
        }
    }else{
        console.log("old password does not match");
        response.status(404).json({ error: 'User not found or no changes made' });
    }
    } catch (error) {
        console.log("Error while updating user profile on controller ", error);
        response.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};

export const userShowRequestedDataController = async (request,respose)=>{

    const {userEmail} = request.body;

    try {
        var userdata = await usermodel.findOne({email:userEmail});
        
        var customiseThaliData = await customiseThaliModel.find({normaluserid:userdata._id});
        
    } catch (error) {
        console.log("Error while see caterer requet to  user  controller ", error);
        response.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}

export const seeRequetedDataController = async (request, response) => {
    console.log("seeRequetedDataController is running ");
    const { userEmail } = request.body;

    try {
        const requestuserData = await requestedDjModel.find({ userEmail: userEmail });
        const result = [];

        for (let i = 0; i < requestuserData.length; i++) {
            const request = requestuserData[i];
            const djDetails = await djRegistrationModel.findOne({ DjEmail: request.djEmail });
            result.push({ ...request.toObject(), djDetails });
        }
        const catereData = await customiseThaliModel.find({userEmail:userEmail});
        console.log("catere data in see request --->",catereData);
        console.log("dj data  data in see request --->",result);

        response.status(201).json({ djUserData: result,catereData:catereData});
    } catch (error) {
        console.log("Error while fetching requested data in controller ", error);
        response.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}