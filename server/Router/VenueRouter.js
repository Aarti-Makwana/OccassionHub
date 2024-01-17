import express  from "express";
import { venueRegistration ,searchVenuController } from "../controller/venueController.js";
var VenueRouter = express.Router();
VenueRouter.post("/VenueRegister",venueRegistration);
VenueRouter.post("/searchServices", searchVenuController);
export default VenueRouter;