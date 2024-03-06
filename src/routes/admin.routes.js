const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

router.get('/editar-producto',adminController.form)
router.get("/crear-producto",adminController.create)
router.get("/lista-productos",adminController.list)


module.exports = router