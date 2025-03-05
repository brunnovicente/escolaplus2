import Turma from "../models/Turma.js";
import Letivo from "../models/Letivo.js";
import Serie from "../models/Serie.js";

class TurmaController{

    index = async function (req, res){
        let letivo = await Letivo.findOne({
            where:{
                status: 1
            }
        })

        if(letivo){
            let turmas = await Turma.findAll({
                where:{
                    letivo_id: letivo.id
                },
                include:{
                    model: Serie,
                    as: 'serie'
                }
            })
            res.render('turma/index', {turmas: turmas})
        }else{
            req.flash('msg_erro','Não há período letivo aberto')
            res.redirect('/admin')
        }

    }//Fim do Index

}

export default new TurmaController();