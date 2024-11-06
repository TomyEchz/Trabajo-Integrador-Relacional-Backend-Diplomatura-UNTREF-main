const express = require('express');
const router = express.Router();
const contenidoController = require('../controllers/contenidoController.js')
// Routes for CRUD
router.get('/', contenidoController.getAllContenidos);
router.get('/:id', contenidoController.getContenidoById);

module.exports = router;
    