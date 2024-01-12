import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {caterre_requestUrl} from '../urls.js'
import jscookie from 'js-cookie';
const initialState = {
   
}
const catererSlice = createSlice({
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

        var registaion = await axios.post(caterre_requestUrl+"/catererRegister",formData);        
        console.log("registration data : " , registaion);
        return registaion;
    } catch (error) {
        console.log("erro in registation user ");
    }
}
export default catererSlice.reducer;