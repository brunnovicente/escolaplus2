import express from 'express';
const router = express.Router();
import SerieController from "../controllers/SerieController.js";

router.get('/:id', SerieController.index)
router.get('/cadastrar/:id', SerieController.cadastrar)
router.post('/salvar', SerieController.salvar)

export default router;