import express from 'express';
import { caterrerRegistrationController,searchCatrerController,seeNormalUserToCatereRequestController } from '../controller/caterereController.js';
var catrererRouter = express.Router();

catrererRouter.post("/catererRegister", caterrerRegistrationController);
catrererRouter.post("/searchServices", searchCatrerController);
catrererRouter.post("/seeNormalUserToCatereRequest", seeNormalUserToCatereRequestController);
export default catrererRouter;