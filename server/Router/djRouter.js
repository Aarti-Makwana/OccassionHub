import express from 'express';
import { djRegistrationContoller ,searchDjController } from '../controller/djController.js';
var DjRouter = express.Router();

DjRouter.post("/djRegister", djRegistrationContoller);
DjRouter.get("/searchServices", searchDjController);
export default DjRouter;