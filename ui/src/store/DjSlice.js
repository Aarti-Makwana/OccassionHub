import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dj_requestUrl } from "../urls.js";
import jscookie from 'js-cookie';
const initialState = {
   
}
const djSlice = createSlice({
    name:'djSlice',
    initialState,
    reducers : {
        
    }
});
export const RegisterDjData = async(formData)=>{
    try {
        alert("slice data.....")
        const userCookieEmail = jscookie.get("user");
       console.log("userCookieEmail : ",userCookieEmail);
    
        console.log("formData : ",formData);

        var registaion = await axios.post(dj_requestUrl+"/djRegister",formData);        
        console.log("registration data : " , registaion);
        return registaion;
    } catch (error) {
        console.log("error in registation user ");
    }
}
export default djSlice.reducer;
