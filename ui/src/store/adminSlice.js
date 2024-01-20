import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { admin_requestedUrl } from "../urls.js";
const initialState = {

}
const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {

    }
});
export const adminShowUserData = async () => {
    alert("adminshowUser Slice calll")
    try {
        var res = await axios.post(admin_requestedUrl + "/userData");
        console.log("user data in slice : ", res.data.userdata);
        return res.data.userdata;
    } catch (error) {
        console.log("error in admin show user data slice ");
    }
}

export const adminShowCatererData = async () => {
    try {
        var caterersDataRes = await axios.post(admin_requestedUrl + "/catererData");
        console.log("caterers Data in slice : ", caterersDataRes.data.caterersData);
        return caterersDataRes.data.caterersData;
    } catch (error) {
        console.log("error in admin show caterers Data slice ");
    }
}

export const adminShowDjData = async () => {
    try {
        var djDataRes = await axios.post(admin_requestedUrl + "/djData");
        console.log("DJ Data in slice : ", djDataRes.data.djUserData);
        return djDataRes.data.djUserData;
    } catch (error) {
        console.log("error in admin show Dj Data slice ");
    }
}

export const adminShowVenueData = async () => {
    try {
        var veneueDataRes = await axios.post(admin_requestedUrl + "/veneueData");
        console.log("DJ Data in slice : ", veneueDataRes.data.veneueData);
        return veneueDataRes.data.veneueData;
    } catch (error) {
        console.log("error in admin show venue Data slice ");
    }
}

export const adminShowDecorationData = async () => {
    try {
        var decorationDataRes = await axios.post(admin_requestedUrl + "/decorationData");
        console.log("decoration Data in slice : ", decorationDataRes.data.decorationData);
        return decorationDataRes.data.decorationData;
    } catch (error) {
        console.log("error in admin show decoration Data slice ");
    }
}
export const adminShowPassDetails = async () => {
    try {
        var passesDataRes = await axios.post(admin_requestedUrl + "/passesData");
        console.log("passes data in slice ----------->", passesDataRes.data.passes);
        return passesDataRes.data.passes;
    } catch (error) {
        console.log("error in admin show pass Data slice ");
    }
}
export const adminShowEventDetails = async () => {
    try {
        var eventresponse = await axios.post(admin_requestedUrl + "/eventData");
        console.log("Event Data ", eventresponse);
        return eventresponse.data.event;
    }
    catch (error) {
        console.log("Error in Event Data", error);
    }
}
export default adminSlice.reducer;