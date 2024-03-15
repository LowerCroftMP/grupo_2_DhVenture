const express = require('express')
const router = express.Router()

const { form, create, list, destroy, remove } = require('../controllers/admin')

router.get('/editar-producto',form)
router.get("/crear-producto",create)
router.get("/lista-productos",list)

router.get('/eliminar-producto',remove);
router.delete('/eliminar-producto/:id',destroy);

module.exports = router