const express = require('express')
const router = express.Router()

const authController = require('../controllers/authentication')

//* Rutas de INICIAR SECION y REGISTRO

router.get('/acceso', authController.login)
router.post('/acceso', authController.processLogin)

router.get('/registro', authController.registro)

module.exports = router