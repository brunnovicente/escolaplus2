import express from 'express';
const router = express.Router();
import TurmaController from "../controllers/TurmaController.js";

router.get('/', TurmaController.index)

export default router;