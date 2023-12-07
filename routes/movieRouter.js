import { Router } from "express";
import { createMovie } from "../Controllers/movieController.js";

const router = Router()

router.post('/admin/createMovie',createMovie)




export default router