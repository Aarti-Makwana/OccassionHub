import express from 'express';
import { caterrerRegistration , searchCatrerController , seeNormalUserToCatereRequestController ,catereSeeRequestedDataController,updateCatereProfileController,catereSendRequestTouserController} from '../controller/caterereController.js';
var catrererRouter = express.Router();

catrererRouter.post("/catererRegister", caterrerRegistration);
catrererRouter.post("/searchServices", searchCatrerController);
catrererRouter.post("/seeNormalUserToCatereRequest", seeNormalUserToCatereRequestController);
catrererRouter.post("/catereSeeRequestedData", catereSeeRequestedDataController);
catrererRouter.post("/updateCatereProfile", updateCatereProfileController);
catrererRouter.post("/sendResponseToUserPrice",catereSendRequestTouserController);

export default catrererRouter;