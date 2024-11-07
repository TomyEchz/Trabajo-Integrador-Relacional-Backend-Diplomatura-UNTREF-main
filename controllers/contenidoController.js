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

const filtrarContenidos = async (req, res) => {
    try {
      const { titulo, genero, categoria } = req.query;
      const filtros = [titulo, genero, categoria].filter(Boolean);
      if (filtros.length !== 1) {
        return res.status(400).send({
          error:
            "Solo se puede filtrar por un parámetro a la vez: título, género o categoría.",
        });
      }
      const filtro = {};
      if (titulo) filtro.titulo = titulo;
      if (genero) filtro.genero = genero;
      if (categoria) filtro.categoria = categoria;
  
      const contenidos = await contenidoService.filtrarContenidos(filtro);
      if (contenidos.length === 0) {
        return res.status(404).send({
          error:
            "No se encontraron contenidos que coincidan con el filtro proporcionado.",
        });
      }
  
      res.status(200).json(contenidos);
    } catch (error) {
      console.error(error);
      res.status(503).send({
        error: "Ocurrió un problema al intentar obtener los contenidos",
        details: error.message,
      });
    }
  };
  

const createContenido = async (req, res) => {
    try {
        const contenido = await contenidoService.createContenido(req.body);
        return res.status(201).json(contenido);
    } catch (error) {
        res.status(500).send({ error: 'No se pudo crear el contenido.' });
    }
}

const updateContenido = async (req, res) => {
    try {
        const { id } = req.params;
        const contenido = await contenidoService.getContenidoById(id);
        if (!contenido) {
            return res.status(404).send({ message: 'Contenido no encontrado.' });
        }
        await contenido.update(req.body);
        return res.status(200).json(contenido);
    } catch (error) {
        res.status(500).send({ error: 'No se pudo actualizar el contenido.' });
    }
}

 const deleteContenido = async (req, res) => {
    try {
        const { id } = req.params;
        const contenido = await contenidoService.deleteContenido(id);
        if (!contenido) {
            return res.status(404).send({ message: 'Contenido no encontrado.' });
        }
        await contenido.destroy();
            return res.status(200).send({ message: 'Contenido eliminado exitosamente.'});
    } catch (error) {
        res.status(500).send({ error: 'No se pudo eliminar el contenido.' });
    }
 }

module.exports = { getAllContenidos, getContenidoById, deleteContenido, createContenido, updateContenido, filtrarContenidos }  