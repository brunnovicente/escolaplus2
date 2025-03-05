import express from 'express';
const app = express();

import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { allowInsecurePrototypeAccess} from "@handlebars/allow-prototype-access";
import session from "express-session";
import flash from "connect-flash"
import passport from "passport"
import auth from './config/auth.js'
auth(passport)

////////////////////////
//CONFIGURAÇÕES
////////////////////////
app.use(session({
    secret: 'iambatman',
    resave: true,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use(function (req, res, next){
    res.locals.msg_sucesso = req.flash("msg_sucesso");
    res.locals.msg_erro = req.flash("msg_erro");
    res.locals.error = req.flash("error");
    res.locals.usuario = req.user || null
    next()
})

//CONFIGURAR O TEMPLATE PADRÃO
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    'helpers':{
        json: function (objeto){
            return JSON.stringify(objeto, null, 2)
        },
        igual: function (x, y){
            if(x === y){
                return true
            }
            return false
        }
        ,
        categoriaUsuario: function (categoria){
            if(categoria === 1){
                return 'Secretaria'
            }else{
                if(categoria === 2){
                    return 'Docente'
                }else{
                    return 'Discente'
                }

            }
        },
        statusMatriz: function (status){
            if(status === 1){
                return 'Ativo'
            }else{
                return 'Desativada'
            }
        },
        statusLetivo: function (status){
            if(status === 1){
                return 'Aberto'
            }else{
                return 'Fechado'
            }
        }
    }
}));
app.set('view engine', 'handlebars');

//CONFIGURAR O BODY PARSER PARA ENVIAR DADOS
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Pasta de Arquivos Estásticos
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

////////////////////
//ROTAS DO SISTEMA
////////////////////
app.get('/', (req, res) => {
    res.redirect('/admin');
})

import admin from './routes/admin.js';
app.use('/admin', admin)

import usuario from './routes/usuario.js';
app.use('/usuario', usuario)

import matriz from './routes/matriz.js';
app.use('/matriz', matriz)

import serie from './routes/serie.js';
app.use('/serie', serie)

import disciplina from './routes/disciplina.js';
app.use('/disciplina', disciplina)

import letivo from './routes/letivo.js';
app.use('/letivo', letivo)

import turma from './routes/turma.js';
app.use('/turma', turma)

app.listen(8001, ()=> console.log('Servidor Rodando em http://localhost:8001'))