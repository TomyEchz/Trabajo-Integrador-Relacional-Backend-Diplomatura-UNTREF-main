const { extensions } = require('sequelize/lib/utils/validator-extras');
const contenidoService = require('../services/contenidoService.js');

const getAllContenidos = async (req, res) => {

    try {
        const contenidos = await contenidoService.getAllContenidos();
        if (!contenidos) (
            res.status(404).send({ message: 'No se encontraron contenidos.' })
        )
        res.status(200).json(contenidos);
    } catch (error) {
        res.status(500).send({ error: 'No se pudieron obtener los contenidos.' });
    }
}

const getContenidoById = async (req, res) => {
    try {
        const { id } = req.params;
        const contenido = await contenidoService.getContenidoById(id);
        if (!contenido) {
            return res.status(404).send({ message: 'Contenido no encontrado.' });
        }
        res.status(200).json(contenido);
    } catch (error) {
        res.status(500).send({ error: 'No se pudo obtener el contenido.' });
    }
}

module.exports = { getAllContenidos, getContenidoById }  