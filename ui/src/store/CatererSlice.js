import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { caterre_requestUrl } from "../components/urls";
import { caterre_requestUrl } from "../urls";
import jscookie from 'js-cookie';
const initialState = {
   
}
const catererSlice = createSlice({
    name:'catererSlice',
    initialState,
    reducers : {
        
    }
});

export const addCaterer = async (caterer)=>{
    try {
        console.log(caterer)
        const userCookieEmail = jscookie.get("useremail");
        console.log("userCookieEmail  : ",userCookieEmail);
        
        var result = await axios.post(caterre_requestUrl+"/genrateOtpCatrere", {cartrerEmail : userCookieEmail});
        console.log("Result in Caterer email ",result);
        return result;
    } catch (error) {
        console.log("error in catererSlice : ",error);
    }
}

export const RegisterCatererData = async(catererDataForRegistation)=>{
    try {
        const userCookieEmail = jscookie.get("useremail");
        console.log("userCookieEmail  : ",userCookieEmail);
        
        console.log("catererDataForRegistation : ",catererDataForRegistation);
        var registaion = await axios.post(caterre_requestUrl+"/catererRegister",{catererDataForRegistation:catererDataForRegistation,userCookieEmail:userCookieEmail});
        console.log("registration data : " , registaion);
        console.log("registration data2 : " , registaion.data.newUser.email);      
        return registaion;
    } catch (error) {
        console.log("erro in registation user ");
    }
}
export default catererSlice.reducer;