import express from 'express';
import { caterrerRegistration } from '../controller/caterereController.js';
var catrererRouter = express.Router();

catrererRouter.post("/catererRegister", caterrerRegistration);
export default catrererRouter;