const Contenido = require('../models/contenido.js');

const getAllContenidos = async () => {
    return await Contenido.findAll(); 
} 

const getContenidoById = async (id) => {
    return await Contenido.findByPk(id);
}

const createContenido = async (datos) => {
    return await Contenido.create(datos);
}

const updateContenido = async (id, datos) => {
    return await Contenido.update(datos, id);
}

const deleteContenido = async (id) => {
    return await Contenido.findByPk(id);
}


module.exports = { getAllContenidos, getContenidoById, deleteContenido, createContenido, updateContenido, }  