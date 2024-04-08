const express = require('express')
const router = express.Router()

const authController = require('../controllers/authentication')
const { loginValidation, registerValidation } = require('../middlewares/validations')

//* Rutas de INICIAR SECION y REGISTRO

router.get('/acceso', authController.login)
router.post('/acceso', loginValidation, authController.login)

router.get('/registro', authController.registro)
router.post('/registro', registerValidation, authController.registro)

module.exports = router