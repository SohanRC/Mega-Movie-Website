import express, {Router} from "express"
import {addtheater} from "../controllers/TheatersController.js"
const router = Router();

router.post("/AddTheater",addtheater)

export default router;