import express from 'express';
import { caterereotpContoller, caterrerRegistration } from '../controller/caterereController.js';
var catrererRouter = express.Router();
catrererRouter.post("/genrateOtpCatrere", caterereotpContoller)
catrererRouter.post("/catererRegister", caterrerRegistration)
export default catrererRouter;