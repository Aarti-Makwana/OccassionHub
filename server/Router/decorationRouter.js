import express from 'express';
import { decorationRegistration ,searchDecorationController , seeNormalUserTodecorationRequest , decorationSeeRequestedData } from '../controller/decorationController.js';
var DecorationRouter = express.Router();

DecorationRouter.post("/decorationRegister", decorationRegistration);
DecorationRouter.get("/searchServices", searchDecorationController);
DecorationRouter.post("/seeNormalUserTodecorationRequest" , seeNormalUserTodecorationRequest)
DecorationRouter.post("/decorationSeeRequestedData" , decorationSeeRequestedData)
export default DecorationRouter;