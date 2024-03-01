const express = require('express')
const router = express.Router()

const controller = require('../controllers')


router.get('/', controller.home)
router.get('/home/login', controller.login)
router.get('/detalle', controller.detalle)
router.get('/home/registro', controller.registro)
router.get('/carrito', controller.carrito)

<<<<<<< HEAD
router.get('/form-edit',admin.form)

router.get('/dashboard', (req, res) => {
    res.render('dashboard', { pageTitle: 'Dashboard' });
});


=======
>>>>>>> 8375136a5d06b8ffd9fcc63ba5eb9386f39c8062
module.exports = router