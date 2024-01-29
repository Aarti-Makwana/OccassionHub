import express from 'express';
import { djRegistrationContoller ,searchDjController,djBookUserController,djProfileDataFindController,seeRequetDjToUserController,ConfirmrequestSendUserController } from '../controller/djController.js';
var DjRouter = express.Router();

DjRouter.post("/djRegister", djRegistrationContoller);
DjRouter.get("/searchServices", searchDjController);
DjRouter.post("/djBookUser",djBookUserController);
DjRouter.post("/djProfileDataFind",djProfileDataFindController);
DjRouter.post("/seeRequetDjToUser",seeRequetDjToUserController);
DjRouter.post("/ConfirmrequestSendUser",ConfirmrequestSendUserController);

export default DjRouter;