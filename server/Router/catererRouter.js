import express from 'express';
import { caterrerRegistrationController,searchCatrerController } from '../controller/caterereController.js';
var catrererRouter = express.Router();

catrererRouter.post("/catererRegister", caterrerRegistrationController);
catrererRouter.post("/searchServices", searchCatrerController);
export default catrererRouter;