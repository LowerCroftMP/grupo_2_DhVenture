const express = require('express')
const router = express.Router()

const controller = require('../controllers')


router.get('/', controller.home)
router.get('/home/login', controller.login)
router.get('/detalle', controller.detalle)
router.get('/home/registro', controller.registro)
router.get('/carrito', controller.carrito)

router.get('/dashboard', (req, res) => {
    res.render('dashboard', { pageTitle: 'Dashboard' });
});

module.exports = router