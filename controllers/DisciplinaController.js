import Disciplina from "../models/Disciplina.js";
import Matriz from '../models/Matriz.js'

class DisciplinaController {

    index = async function (req, res) {
        let id = req.params.id;
        let matriz = await Matriz.findByPk(id)

        let disciplinas = await Disciplina.findAll({
            where:{
                matriz_id:id,
            }
        })
        res.render('disciplina/index', { disciplinas: disciplinas, matriz: matriz});
    }

    cadastrar = async function (req, res) {
        let id = req.params.id;
        let matriz = await Matriz.findByPk(id)

        res.render('disciplina/cadastrar', { matriz: matriz })
    }

    salvar = function (req, res){
        let nova = {
            descricao: req.body.descricao,
            matriz_id: req.body.matriz_id,
            sequencia: req.body.sequencia
        }

        Disciplina.create(nova).then(function (){
            req.flash('msg_sucesso', 'Disciplina cadastrada com sucesso!')
            res.redirect('/disciplina/'+nova.matriz_id)
        })
    }

}

export default new DisciplinaController();