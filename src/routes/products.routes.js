const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')

router.get('/detalle', productsController.detalle)

module.exports = router