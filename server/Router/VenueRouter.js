import express  from "express";
import { venueRegistration } from "../controller/venueController.js";
var VenueRouter = express.Router();
VenueRouter.post("/VenueRegister",venueRegistration);
export default VenueRouter;