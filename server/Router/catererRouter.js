import express from 'express';
<<<<<<< HEAD
import { caterrerRegistration , searchCatrerController , seeNormalUserToCatereRequestController ,catereSeeRequestedDataController,updateCatereProfileController,catereSendRequestTouserController} from '../controller/caterereController.js';
=======
import { caterrerRegistration, searchCatrerController, seeNormalUserToCatereRequestController, catereSeeRequestedDataController, updateCatereProfileController } from '../controller/caterereController.js';
>>>>>>> 8682a7750ce94e1abd2c97bafa4de032a8d5ce0f
var catrererRouter = express.Router();

catrererRouter.post("/catererRegister", caterrerRegistration);
catrererRouter.post("/searchServices", searchCatrerController);
catrererRouter.post("/seeNormalUserToCatereRequest", seeNormalUserToCatereRequestController);
catrererRouter.post("/catereSeeRequestedData", catereSeeRequestedDataController);
catrererRouter.post("/updateCatereProfile", updateCatereProfileController);
<<<<<<< HEAD
catrererRouter.post("/sendResponseToUserPrice",catereSendRequestTouserController);

export default catrererRouter;
=======
export default catrererRouter;
>>>>>>> 8682a7750ce94e1abd2c97bafa4de032a8d5ce0f
