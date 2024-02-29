const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

router.get('/form-edit',adminController.form)

//*ruta crear producto

//router.get('/',adminController.create)


module.exports = router