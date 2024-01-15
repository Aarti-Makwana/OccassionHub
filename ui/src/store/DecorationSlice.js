import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { decoration_requestUrl } from "../urls.js";
import jscookie from 'js-cookie';
const initialState = {
   
}
const decorationSlice = createSlice({
    name:'decorationSlice',
    initialState,
    reducers : {
        
    }
});
export const RegisterDecorationData = async(formData)=>{
    try {
        const userCookieEmail = jscookie.get("user");
       console.log("userCookieEmail : ",userCookieEmail);
    
        console.log("formData : ",formData);

        var registaion = await axios.post(decoration_requestUrl+"/decorationRegister",formData);        
        console.log("registration data : " , registaion);
        return registaion;
    } catch (error) {
        console.log("error in registation user ");
    }
}
export default decorationSlice.reducer;
