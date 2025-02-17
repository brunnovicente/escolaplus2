import express from 'express'
const router = express.Router()
import MatrizController from '../controllers/MatrizController.js'

router.get('/', MatrizController.index)
router.get('/cadastrar', (req, res) => res.render('matriz/cadastrar'))
router.post('/cadastrar', MatrizController.cadastrar)

export default router