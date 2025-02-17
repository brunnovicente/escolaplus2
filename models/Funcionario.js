import banco from '../config/banco.js'
import Usuario from "./Usuario.js";

const Funcionario = banco.sequelize.define('funcionarios', {

    id: {
        type: banco.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: banco.Sequelize.STRING(100),
        allowNull: false
    },
    telefone1: {
        type: banco.Sequelize.STRING(20),
        allowNull: true
    },
    telefone2: {
        type: banco.Sequelize.STRING(20),
        allowNull: true
    },
    email: {
        type: banco.Sequelize.STRING(100),
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    cep: {
        type: banco.Sequelize.STRING(20),
        allowNull: true
    },
    endereco: {
        type: banco.Sequelize.STRING(100),
        allowNull: true
    },
    numero: {
        type: banco.Sequelize.STRING(20),
        allowNull: true
    },
    bairro: {
        type: banco.Sequelize.STRING(100),
        allowNull: true
    },
    cidade: {
        type: banco.Sequelize.STRING(100),
        allowNull: true
    },
    estado: {
        type: banco.Sequelize.STRING(100),
        allowNull: true
    },
    nascimento: {
        type: banco.Sequelize.DATE,
        allowNull: true
    },
    categoria: {
        type: banco.Sequelize.INTEGER,
        allowNull: true
    },

})

Funcionario.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    constraint: true
})

export default Funcionario