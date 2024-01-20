import express from 'express';
import { caterrerRegistration , searchCatrerController , seeNormalUserToCatereRequestController ,catereSeeRequestedDataController} from '../controller/caterereController.js';
var catrererRouter = express.Router();

catrererRouter.post("/catererRegister", caterrerRegistration);
catrererRouter.post("/searchServices", searchCatrerController);
catrererRouter.post("/seeNormalUserToCatereRequest", seeNormalUserToCatereRequestController);
catrererRouter.get("/catereSeeRequestedData", catereSeeRequestedDataController);

export default catrererRouter;