const express = require('express')
const router = express.Router()

const { form, create, list, destroy } = require('../controllers/admin')

router.get('/editar-producto',form)
router.get("/crear-producto",create)
router.get("/lista-productos",list)


router.delete('./eliminar-producto/:id',destroy);

module.exports = router