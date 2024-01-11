import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {venue_requestUrl} from '../urls.js'
const initialState = {
   
}
const catererSlice = createSlice({
    name:'catererSlice',
    initialState,
    reducers : {
        
    }
});
export const RegistervenueData = async(formData)=>{
    try {
        console.log("formData : ",formData);
        var registaion = await axios.post(venue_requestUrl+"/VenueRegister",formData);        
        console.log("registration data : " , registaion);
        return registaion;
    } catch (error) {
        console.log("erro in registation user ");
    }
}
export default catererSlice.reducer;