import express from 'express';
import { caterrerRegistrationController,searchCatrerController,seeNormalUserToCatereRequestController,catereSeeRequestedDataController } from '../controller/caterereController.js';
var catrererRouter = express.Router();

catrererRouter.post("/catererRegister", caterrerRegistrationController);
catrererRouter.post("/searchServices", searchCatrerController);
catrererRouter.post("/seeNormalUserToCatereRequest", seeNormalUserToCatereRequestController);
catrererRouter.get("/catereSeeRequestedData", catereSeeRequestedDataController);
export default catrererRouter;