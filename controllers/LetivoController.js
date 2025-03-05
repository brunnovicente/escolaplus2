import Letivo from '../models/Letivo.js'

class LetivoController {

    index = async function(req, res) {
        let letivos = await Letivo.findAll()
        res.render('letivo/index', {letivos: letivos})
    }

    cadastrar = async function(req, res) {
        let letivo = await Letivo.findOne({
            where: {
                status: 1
            }
        })

        if(letivo){
            req.flash('msg_erro', 'Ano Letivo já aberto!')
            res.redirect('/admin')
        }else {
            res.render('letivo/cadastrar')
        }
    }

    salvar = async function(req, res) {

        let letivo = await Letivo.findOne({
            where: {
                status: 1
            }
        })

        if(letivo){
            req.flash('msg_error', 'Ano Letivo já aberto!')
            res.redirect('/admin')
        }else{
            let novo = {
                ano: req.body.ano,
                status: 1
            }


            Letivo.create(novo).then(function (){
                req.flash('msg_sucesso', 'Ano Letivo Aberto com sucesso!')
                res.redirect('/letivo')
            })
        }
    }//Fim do salvar


}

export default new LetivoController();