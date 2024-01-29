import usermodel from "../model/usermodel.js"
import catererRegistrationModel from "../model/catererRegistrationModel.js";
import venueRegistration from "../model/venueRegistration.js";
import decorationRegistrationModel from "../model/decorationRegistrationModel.js";
import djRegistrationModel from "../model/djRegistrationModel.js";
import passesModel from '../model/passesModel.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import customiseThaliModel from "../model/customiseThaliModel.js";
import adminModel from "../model/adminModel.js";
import requestSchema from '../model/eventRequestModel.js'
import requestedDjModel from '../model/requestedDjModel.js';
// import user
dotenv.config();
var secret_key = process.env.ADMIN_SECRET_KEY
export const adminLoginController = async(request,response,next)=>{
    const {email,password} = request.body;
    try{
        var expireTime = {expiresIn : '1d'};
        var token = jwt.sign({_id:email},secret_key,expireTime); 
        console.log("token",token)
        if(!token)
            response.status(500).json({message:"Error while generating token inside admin login"});
        var adminObj = await adminModel.findOne({_id:email});
        console.log(adminObj);
        var adminPassword = adminObj.password;
        console.log(adminPassword);
        if (password === adminPassword) {
            response.status(201).json({ adminemail: email, token: token });
            next();
        } else {
            response.status(203).json({ message: "Incorrect password" });
        }
    }catch(err){
        console.log("Error in admin login controller : "+err);
        response.status(203).json({message:"Error while Login"});
    }
};
export const adminShowUserController = async (req, res) => {
    try {
        var data = await usermodel.find();
        console.log("data : ", data);
        res.status(201).json({ userdata: data });
    } catch (error) {
        console.error("Error in admin Show user data controller: ", error);
        res.status(500).json({ status: false });
    }
}

export const adminShowCatererDataController = async (req, res) => {
    try {
        var data = await catererRegistrationModel.find();
        console.log("data : ", data);
        res.status(201).json({ caterersData: data });
    } catch (error) {
        console.error("Error in admin Show caterer data controller: ", error);
        res.status(500).json({ status: false });
    }
}

export const adminShowDjController = async (req, res) => {
    try {
        var djData = await djRegistrationModel.find();
        console.log("djData : ", djData);
        res.status(201).json({ djUserData: djData });
    } catch (error) {
        console.error("Error in admin Show caterer data controller: ", error);
        res.status(500).json({ status: false });
    }
}

export const adminshowVeneueController = async (req, res) => {
    try {
        var veneueData = await venueRegistration.find();
        res.status(201).json({ veneueData: veneueData });
    } catch (error) {
        console.error("Error in admin Show venue data controller: ", error);
        res.status(500).json({ status: false });
    }
}

export const adminShowDecorationController = async (req, res) => {
    try {
        var decorationData = await decorationRegistrationModel.find();
        res.status(201).json({ decorationData: decorationData });
    } catch (error) {
        console.error("Error in admin Show decoration data controller : ", error);
        res.status(500).json({ status: false });
    }
}
export const adminshowPassesDataController = async (req, res) => {
    try {
        var passes = await passesModel.find();

        res.status(201).json({ passes: passes });
    } catch (error) {
        console.error("Error in admin Show passes data controller: ", error);
        res.status(500).json({ status: false });
    }
}
export const adminShowEventController = async (req, res) => {
    try {
        var event = await requestSchema.find();
        console.log("Event Data", event);
        res.status(201).json({ event: event });
    }
    catch (error) {
        console.log("error in admin show event controller: ", error);
        res.status(500).json({ status: false });
    }
}

export const adminshowRequestedUserCatererDataController = async(request,response)=>{
    try {
        var data  = await customiseThaliModel.find();
        console.log("data in adminshowRequestedUserCatererDataController : ",data);
        
    } catch (error) {
        
    }
}

export const adminshowRequestedUserDjDataController = async (request, response) => {
    try {
        var DjData = await requestedDjModel.find();
        console.log("DjData ---------->", DjData);

        const userData = [];
        for (let i = 0; i < DjData.length; i++) {
            const requestItem = DjData[i];
            const dj = await djRegistrationModel.findOne({ DjEmail: requestItem.djEmail });
            const user = await usermodel.findOne({ email: requestItem.userEmail });
            userData.push({ ...requestItem.toObject(), user, dj });
        }

        console.log("userData in see RequetDj To User Controller ", userData);
        response.status(201).json({ AllRequtedUserData: userData });

    } catch (error) {
        console.log("error in admin show Requested User DjData Controller: ", error);
        response.status(500).json({ status: false });
    }
}


export const adminviewRequestedUserVenueDataController = async(request,response)=>{
    try {
   
    } catch (error) {
        
    }
}