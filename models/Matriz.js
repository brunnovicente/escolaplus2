import banco from '../config/banco.js'

const Matriz = banco.sequelize.define('matrizes', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: banco.Sequelize.STRING(100),
    },
    status:{
        type: banco.Sequelize.INTEGER,
    },
})

export default Matriz