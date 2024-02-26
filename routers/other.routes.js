const express = require('express')
const router = express.Router()

const controller = require('../controllers')

const admin = require('../controllers/admin')

router.get('/', controller.home)
router.get('/home/acceso', controller.acceso)
router.get('/detalle', controller.detalle)
router.get('/home/registro', controller.registro)
router.get('/carrito', controller.carrito)

router.get('/form-edit',admin.form)


module.exports = router