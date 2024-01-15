import express from 'express';
import { caterrerRegistration , searchCatrerController } from '../controller/caterereController.js';
var catrererRouter = express.Router();

catrererRouter.post("/catererRegister", caterrerRegistration);
catrererRouter.post("/searchServices", searchCatrerController);
export default catrererRouter;