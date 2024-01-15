// redux/djSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import {dj_requestUrl} from '../urls.js'
import jscookie from 'js-cookie';
const initialState = {
  djData: {},
  isLoading: false,
  error: null,
};

const djSlice = createSlice({
  name: 'djSlice',
  initialState,
  reducers: {
    // setDjData: (state, action) => {
    //   state.djData = action.payload;
    // },
    // setLoading: (state, action) => {
    //   state.isLoading = action.payload;
    // },
    // setError: (state, action) => {
    //   state.error = action.payload;
    // },
    // resetState: (state) => {
    //   state.djData = {};
    //   state.isLoading = false;
    //   state.error = null;
    // },
  }
});

export const submitDjForm = async (djFormData) => {
  try {
    const userCookieEmail = jscookie.get("user");
    console.log("userCookieEmail : ",userCookieEmail);
 
     console.log("formData : ",djFormData);

    const registration = await axios.post(dj_requestUrl+"/djManagerRegistration", djFormData);
console.log("registration data : " , registration);
return registration;
    //dispatch(setDjData(result.data));
  } catch (error) {
    console.log("error");
    //dispatch(setError(error.message));
  // } finally {
  //   dispatch(setLoading(false));
  // }
  }
}
//export const { setDjData, setLoading, setError, resetState } = djSlice.actions;
export default djSlice.reducer;
