import { response } from "express";
import mailer from "./mailer.js";
import usermodel from "../model/usermodel.js";
import jwt from 'jsonwebtoken';
import stripe from 'stripe';
// import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
const { USER_SECRET_KEY } = process.env;
const stripeInstance = stripe(USER_SECRET_KEY);
const maxAge = 10 * 24 * 60 * 60;
var SECRET_KEY = "thisisusersecretkey";
export const userotpContoller = async (request , response)=>{
    try {
        const {email} = request.body;
            console.log("email : " , request.body.email)
        
        mailer(email, ( status, Rotp ) => {
           
            if (status) {
                console.log("email send")
                console.log("otp : "+Rotp);
                response.status(201).json({ status: true,Rotp:Rotp });
            } else {
                console.log("Error in user OTP generation : ")
                response.status(500).json({ status: false });
            }
        });
    } catch (error) {
        console.error("Error in user OTP generation controller: ", error);
        response.status(500).json({ status: false }); 
    }
}
export const userRegistration = async (request,response)=>{
    var payload = {};
    try {
        console.log("request.body : ",request.body);
        const {name,email,password,contect,address} = request.body
        // var data =  usermodel.create(request.body)

        const newUser = await usermodel.create({
            email: email,
            name: name,
            password: password,
            contect: contect,
            address: address,
          });
        console.log("newUser : ",newUser);
        payload.user = request.body;
        const expiryTime = {
            expiresIn: '1d'
          }
          const token = jwt.sign(payload, SECRET_KEY, expiryTime);
          response.cookie('user', token, { httpOnly: true, maxAge: 86400 * 1000 });
          response.cookie('userRegistrationData', newUser.email, { maxAge: 86400 * 1000 });

          await newUser.save();
          response.status(201).json({ newUser : newUser });
          console.log("expiryTime : ",expiryTime);
          console.log("token : ",token);
          console.log("registration ho gya")
    } catch (error) {
        console.error("Error in user registration controller: ", error);
        response.status(500).json({ status: false }); 
    }
}