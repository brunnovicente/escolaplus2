import banco from '../config/banco.js'
import Matriz from "./Matriz.js";

const Serie = banco.sequelize.define('series', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: banco.Sequelize.STRING(100),
    },
    sequencia:{
        type: banco.Sequelize.INTEGER,
    },
})

Serie.belongsTo(Matriz, {
    foreignKey: 'matriz_id',
    constraint: true,
    as: 'matriz'
})

export default Serie