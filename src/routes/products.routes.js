const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')

router.get('/detalle/:id', productsController.detalle)

module.exports = router