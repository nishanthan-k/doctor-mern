import { Router } from "express";
import { doctorsList } from "../controllers/doctor.controller.js";

const router = Router();


router.get('/list', doctorsList);


export default router;