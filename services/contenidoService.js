const Contenido = require('../models/contenido.js');

const getAllContenidos = async () => {
    return await Contenido.findAll(); 
} 

const getContenidoById = async (id) => {
    return await Contenido.findByPk(id);
}
module.exports = { getAllContenidos, getContenidoById }  