import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { user_requestedUrl } from "../components/urls.js";
import jscookiee from 'js-cookie';

const initialState = {

}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers : {
        // setMessage:(state,action)=>{
        //     state.initialState = action.payload;
        // }
    }
});

export const adduser = async (userData) => {
    try {
        console.log("adduser slice call....!!");
        console.log("userData in adduserSlice  : ",userData);
        console.log("userData in adduserSlice  : ",userData.email);
        var result = await axios.post(user_requestedUrl+"/genrateOtp", {email : userData.email});
        console.log("result : ",result);
        return result;
    } catch (error) {
        console.log("erro in opt send",error);
    }   
}

export const RegisterUserData = async(userDataForRegistation)=>{
    try {
        console.log("userData : ",userDataForRegistation);
        var registaion = await axios.post(user_requestedUrl+"/register",userDataForRegistation);
        console.log("registration data : " , registaion);
        console.log("registration data2 : " , registaion.data.newUser.email);
        jscookiee.set("user", registaion.data.newUser.email,{expires:7});
        console.log("Cookie set ");
        
        // var result = await axios.post(user_requestedUrl+"/genrateOtp", {email : userData.email});
        // console.log("result : ",result);
        alert("registaion sucesfully")
        return registaion;
    } catch (error) {
        console.log("erro in registation user ");
    }
}

export const userLogin = async (userDataLogin) => {
    try {
        console.log("userDataLogin : ",userDataLogin);
        var result = await axios.post(user_requestedUrl+'/userLogin',userDataLogin);
        console.log("userloginSlice : ",result);
        console.log("token : ",result.data.token);
        jscookiee.set('user',result.data.token,{expires:1});
        return result;

    } catch (error) {
        console.log("error in userLoginSlice : ",error);
    }
}
export default userSlice.reducer;