import express from 'express';
// import userContoller from '../controller/userContoller.js';
import {userotpContoller , userRegistration} from '../controller/userContoller.js';
import{userEventRequestController} from '../controller/userControllers/eventRequestFormController.js';
var userRouter =  express.Router();
userRouter.post("/genrateOtp",userotpContoller)
userRouter.post("/register",userRegistration);
userRouter.post("/eventRequest",userEventRequestController);
export default userRouter;
