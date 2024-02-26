//PREGUNTAARRRRR
const express = require('express')
const router = express.Router()

const admin= require("../controllers/admin")

router.get("/crear-producto",admin.create)

module.exports = router