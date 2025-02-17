import banco from '../config/banco.js'

const Usuario = banco.sequelize.define('usuarios', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: banco.Sequelize.STRING(100),
    },
    senha:{
        type: banco.Sequelize.STRING(250),
    },
    categoria:{
        type: banco.Sequelize.INTEGER,
    },
    status:{
        type: banco.Sequelize.INTEGER,
    },
    email: {
        type: banco.Sequelize.STRING(100),
    },
    foto:{
        type: banco.Sequelize.TEXT,
    }
})

export default Usuario