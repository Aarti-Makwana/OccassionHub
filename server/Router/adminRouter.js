import express from 'express';
import {
    adminShowUserController, adminShowCatererDataController, adminShowDjController, adminshowVeneueController,adminShowEventController,
    adminShowDecorationController, adminshowPassesDataController,adminLoginController,adminshowRequestedUserDjDataController
} from '../controller/adminController.js';
var adminRouter = express.Router();
adminRouter.post("/adminLogin",adminLoginController);
adminRouter.post("/userData", adminShowUserController);
adminRouter.post("/catererData", adminShowCatererDataController);
adminRouter.post("/djData", adminShowDjController);
adminRouter.post("/veneueData", adminshowVeneueController);
adminRouter.post("/decorationData", adminShowDecorationController);
adminRouter.post("/eventData",adminShowEventController);
adminRouter.post("/passesData", adminshowPassesDataController);
// adminRouter.post("/adminshowRequestedUserCatererData",adminshowRequestedUserCatererDataController);
adminRouter.post("/adminshowRequestedUserDjData",adminshowRequestedUserDjDataController);
// adminRouter.post("/adminshowRequestedUserVenueData",adminviewRequestedUserVenueDataController);
export default adminRouter;