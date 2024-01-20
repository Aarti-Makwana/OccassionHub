import usermodel from "../model/usermodel.js"
import catererRegistrationModel from "../model/catererRegistrationModel.js";
import venueRegistration from "../model/venueRegistration.js";
import decorationRegistrationModel from "../model/decorationRegistrationModel.js";
import djRegistrationModel from "../model/djRegistrationModel.js";
import passesModel from '../model/passesModel.js';
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
        console.error("Error in admin Show decoration data controller: ", error);
        res.status(500).json({ status: false });
    }
}
export const adminshowPassesDataController = async (req, res) => {
    try {
        var passes = await passesModel.find();
        console.log("passes Data :---------------> ", passes);

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