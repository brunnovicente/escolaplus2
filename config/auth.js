import passportLocal from 'passport-local'
const localEstrategy = passportLocal.Strategy
import bcrypt from "bcryptjs"
import Usuario from "../models/Usuario.js"
import Funcionario from "../models/Funcionario.js"

export default function (passport){
    passport.use(new localEstrategy(
        {usernameField: 'username',passwordField: 'password'},
        function(username, password, done){
            Usuario.findOne({
                where:{
                    login: username
                }
            }).then(function (usuario){
                if(!usuario){
                    return done(null, false, {message: 'Usuario Inválido!'});
                }
                bcrypt.compare(password, usuario.senha, function(err, iguais){
                    if(iguais){
                        return done(null, usuario)
                    }else{
                        return done(null, false, {message: 'Senha Inválida!'})
                    }
                })
            })
        }
    ))

    passport.serializeUser(function (usuario, done){
        done(null, usuario.id)
    })

    passport.deserializeUser(function (id, done){
        Usuario.findByPk(id).then(function (usuario){
            Funcionario.findOne({
                where:{
                    usuario_id: usuario.id
                }
            }).then(function (funcionario){
                usuario.funcionario = funcionario;
                done(null, usuario)
            })
        })
    })

}