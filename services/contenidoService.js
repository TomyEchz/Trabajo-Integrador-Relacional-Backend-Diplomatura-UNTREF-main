const Contenido = require('../models/contenido.js');

const getAllContenidos = async () => {
    return await Contenido.findAll(); 
}

module.exports = { getAllContenidos }  