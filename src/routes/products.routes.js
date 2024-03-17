const express = require('express');
const router = express.Router();

const { detalle, productos } = require('../controllers/products');

router.get('/detalle/:id', detalle);
router.get('/listas-productos', productos);

module.exports = router;