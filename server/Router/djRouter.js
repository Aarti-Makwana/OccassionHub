// routes/djRouter.js
import express from 'express';
import {djManagerRegistration} from '../controller/djController.js';

const djRouter = express.Router();

// DJ Manager registration endpoint
djRouter.post("/djManagerRegistration", djManagerRegistration);

export default djRouter;
