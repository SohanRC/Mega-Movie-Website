import express, {Router} from "express"
import {addNewMovie,getAllMovie,getMovie,deleteMovie} from "../controllers/MovieController.js"
import { upload } from "../middleware/Multer.js";

const router = Router();

router.post("/add-movie",upload.fields([
    {
        name:"featuredImage",
        maxCount:1,
    },
    {
        name:"clips",
        maxCount:4
    },
]),addNewMovie);
router.get("/all-movies",getAllMovie);
router.get("/single-movie/:slug",getMovie);
router.delete("/delete-movie/:slug",deleteMovie);

export default router;