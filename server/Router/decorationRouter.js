import express from 'express';
import { decorationRegistration ,searchDecorationController } from '../controller/decorationController.js';
var DecorationRouter = express.Router();

DecorationRouter.post("/decorationRegister", decorationRegistration);
DecorationRouter.get("/searchServices", searchDecorationController);
export default DecorationRouter;