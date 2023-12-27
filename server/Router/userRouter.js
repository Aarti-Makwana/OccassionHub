import express from 'express';
// import userContoller from '../controller/userContoller.js';
import { userotpContoller, userRegistration, userLoginController  } from '../controller/userController/userContoller.js';
import {userEventRequestController} from '../controller/userController/eventRequestFormController.js';
var userRouter = express.Router();
userRouter.post("/genrateOtp", userotpContoller)
userRouter.post("/register", userRegistration);
userRouter.post("/userLogin", userLoginController);
userRouter.post("/eventRequest",userEventRequestController);

export default userRouter;