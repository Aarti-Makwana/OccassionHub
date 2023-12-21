import express from 'express';
// import userContoller from '../controller/userContoller.js';
import {userotpContoller , userRegistration} from '../controller/userContoller.js';
var userRouter =  express.Router();
userRouter.post("/genrateOtp",userotpContoller)
userRouter.post("/register",userRegistration);
export default userRouter;