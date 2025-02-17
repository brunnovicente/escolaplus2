import Serie from '../models/Serie.js';
import Matriz from '../models/Matriz.js';

class SerieController extends Serie {

    index = async function (req, res){
        const matriz = await Matriz.findByPk(req.params.id);
        const series =  await Serie.findAll({
            where:{
                matriz_id: matriz.id
            },
            include:{
                model: Matriz,
                as: 'matriz'
            }
        })
        res.render('serie/index', {matriz: matriz, series: series})
    }

    cadastrar = async function (req, res){
        const matriz = await Matriz.findByPk(req.params.id);
        res.render('serie/cadastrar', {matriz: matriz})
    }

    salvar = function (req, res){
        const novo = {
            descricao: req.body.descricao,
            sequencia: req.body.sequencia,
            matriz_id: req.body.matriz_id,
        }
        Serie.create(novo).then(function (){
            req.flash('msg_sucesso', 'Série cadastrada com sucesso!')
            res.redirect('/serie/'+novo.matriz_id)
        })
    }

}

export default new SerieController();