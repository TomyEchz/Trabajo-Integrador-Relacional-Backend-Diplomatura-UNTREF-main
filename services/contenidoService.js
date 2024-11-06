const Contenido = require('../models/contenido.js');

const getAllContenidos = async () => {
    const contenidos = await Contenido.findAll();
    return contenidos;
}
module.exports = { getAllContenidos }