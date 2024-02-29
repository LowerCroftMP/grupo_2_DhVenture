const express = require('express')
const router = express.Router()

const otherController = require('../controllers/other')

//const admin = require('../controllers/admin')

router.get('/', otherController.home)

//*PARA REDIRECCIONAR
router.get('/home', (req,res)=>{
    res.redirect('/')
})
//router.get('/home/acceso', controller.login)
//router.get('/home/registro', controller.registro)
//router.get('/detalle', controller.detalle)
//router.get('/carrito', controller.carrito)
//
//router.get('/form-edit',admin.form)


module.exports = router