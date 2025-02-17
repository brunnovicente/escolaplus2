import banco from '../config/banco.js'

const Letivo = banco.sequelize.define('letivos', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ano:{
        type: banco.Sequelize.INTEGER,
    },
    status:{
        type: banco.Sequelize.INTEGER,
    }
})

export default Letivo