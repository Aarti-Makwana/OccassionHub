import express  from "express";
import { venueRegistration ,searchVenuController,venueBookUserController } from "../controller/venueController.js";
var VenueRouter = express.Router();
VenueRouter.post("/VenueRegister",venueRegistration);
VenueRouter.post("/searchServices", searchVenuController);
VenueRouter.post("/venueBookUser", venueBookUserController);
export default VenueRouter;