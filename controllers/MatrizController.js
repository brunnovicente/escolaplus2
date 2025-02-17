import Matriz from '../models/Matriz.js'

class MatrizController {

    index = async function (req, res){
        const matrizes = await Matriz.findAll()
        res.render('matriz/index', { matrizes: matrizes })
    }

    cadastrar = async function (req, res){
        const novo = {
            descricao: req.body.descricao,
            status: 1
        }
        Matriz.create(novo).then(function (){
            req.flash('msg_sucesso', 'Matriz cadastrada com sucesso!')
            res.redirect('/matriz')
        })
    }

}

export default new MatrizController()