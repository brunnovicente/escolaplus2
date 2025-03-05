import express from 'express'
const router = express.Router()
import LetivoController  from "../controllers/LetivoController.js";

router.get('/', LetivoController.index)
router.get('/cadastrar', LetivoController.cadastrar)
router.post('/salvar', LetivoController.salvar)

export default router