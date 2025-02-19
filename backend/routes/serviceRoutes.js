import express from "express";
import auth from "../middlewares/AuthMiddleWare.js";
import { createService, getAllServices, updateService } from "../controller/serviceController.js";
const router = express.Router();


router.post('/create-service',auth,createService);
router.get('/get-all-services',auth,getAllServices);
router.put('/update-service/:serviceId',auth,updateService);

export default router;