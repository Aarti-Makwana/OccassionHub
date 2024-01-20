import express from 'express';
import {
    adminShowUserController, adminShowCatererDataController, adminShowDjController, adminshowVeneueController,adminShowEventController,
    adminShowDecorationController, adminshowPassesDataController
} from '../controller/adminController.js';
var adminRouter = express.Router();
adminRouter.post("/userData", adminShowUserController);
adminRouter.post("/catererData", adminShowCatererDataController);
adminRouter.post("/djData", adminShowDjController);
adminRouter.post("/veneueData", adminshowVeneueController);
adminRouter.post("/decorationData", adminShowDecorationController);
adminRouter.post("/eventData",adminShowEventController);
adminRouter.post("/passesData", adminshowPassesDataController);
export default adminRouter;