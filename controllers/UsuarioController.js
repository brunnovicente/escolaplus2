import Usuario from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import passport from "passport";

class UsuarioController{

    login = function (req, res, next){
        passport.authenticate('local', {
            successRedirect: '/admin',
            failureRedirect: '/usuario/login',
            failureFlash: true
        })(req, res, next)
    }

    logout = function (req, res, next){
        req.logout(function (erro){
            req.flash('msg_sucesso', 'Usuário deslogado com sucesso!');
            res.redirect('/usuario/login');
        })
    }

}

export default new UsuarioController();