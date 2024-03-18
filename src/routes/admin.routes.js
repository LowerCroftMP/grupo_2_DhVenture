const express = require('express');
const router = express.Router();

const { form, create, list, destroy, remove, update } = require('../controllers/admin');
const { uploadProducts } = require('../middlewares/delete-upload-files');


router.get("/crear-producto",create);
router.get("/lista-productos",list);

router.get('/editar-producto/:id',form);
router.put('/editar-producto/:id',uploadProducts.single('image') ,update);


router.get('/eliminar-producto',remove);
router.delete('/eliminar-producto/:id',destroy);

module.exports = router;