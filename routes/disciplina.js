import express from 'express';
const router = express.Router();
import DisciplinaController from "../controllers/DisciplinaController.js";

router.get('/:id', DisciplinaController.index)
router.get('/cadastrar/:id', DisciplinaController.cadastrar)
router.post('/salvar', DisciplinaController.salvar)

export default router;