import express from 'express';
import { caterrerRegistration, searchCatrerController, seeNormalUserToCatereRequestController, catereSeeRequestedDataController, updateCatereProfileController } from '../controller/caterereController.js';
var catrererRouter = express.Router();

catrererRouter.post("/catererRegister", caterrerRegistration);
catrererRouter.post("/searchServices", searchCatrerController);
catrererRouter.post("/seeNormalUserToCatereRequest", seeNormalUserToCatereRequestController);
catrererRouter.post("/catereSeeRequestedData", catereSeeRequestedDataController);
catrererRouter.post("/updateCatereProfile", updateCatereProfileController);
export default catrererRouter;