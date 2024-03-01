//PREGUNTAARRRRR
const express = require('express')
const router = express.Router()

const admin= require("../controllers/admin")

router.get("/crear-producto",admin.create)

router.get('/form-edit',admin.form)

module.exports = router