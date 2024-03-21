const express = require('express')
const router = express.Router()

const {create,store} = require('../controllers/admin')


router.get("/crear-producto",create)
router.post("/crear-producto",store)
module.exports = router