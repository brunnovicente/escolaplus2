import banco from '../config/banco.js'
import Letivo from "./Letivo.js";
import Serie from "./Serie.js";

const Turma = banco.sequelize.define('turmas', {

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

    turno:{
        type: banco.Sequelize.STRING(50),
    }

})

Turma.belongsTo(Letivo, {
    foreignKey: 'letivo_id',
    constraint: true,
})

Turma.belongsTo(Serie, {
    foreignKey: 'serie_id',
    constraint: true,
    as: 'serie'
})

export default Turma