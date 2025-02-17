import express from "express";
const router = express.Router();
import {logado} from "../config/poderes.js";

router.get("/", logado, (req, res) => {res.render('admin/index')})

export default router;