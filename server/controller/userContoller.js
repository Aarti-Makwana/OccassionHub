import { request, response } from "express";
import mailer from "./mailer.js";
import usermodel from "../model/usermodel.js";
import jwt from 'jsonwebtoken';
import stripe from 'stripe';
import bcrypt from 'bcrypt';
// import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
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
