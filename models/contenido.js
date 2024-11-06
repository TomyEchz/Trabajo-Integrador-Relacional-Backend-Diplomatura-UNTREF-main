const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database'); 

const Contenido = sequelize.define('Contenido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    poster: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    resumen: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    temporada: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    trailer: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Categorias', 
        },
    },
}, {
    tableName: 'Contenidos', 
    timestamps: false, 
});

module.exports = Contenido;
