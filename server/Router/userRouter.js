import express from 'express';
// import userContoller from '../controller/userContoller.js';
import { userotpContoller, userRegistration, userLoginController ,updateUserProfileController,contactController,staffLoginController } from '../controller/userContoller.js';
import {userEventRequestController , profileController} from '../controller/eventRequestFormController.js';
var userRouter = express.Router();
userRouter.post("/genrateOtp", userotpContoller)
userRouter.post("/register", userRegistration);
userRouter.post("/userLogin", userLoginController);
userRouter.post("/eventRequest",userEventRequestController);
userRouter.post("/profile",profileController);
userRouter.post("/updateUserProfile",updateUserProfileController);
userRouter.post("/contactData",contactController);
userRouter.post("/staffLogin",staffLoginController);
export default userRouter;