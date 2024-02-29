const express = require('express')
const router = express.Router()

const cartController = require('../controllers/cart')

router.get('/carrito', cartController.carrito)

module.exports = router