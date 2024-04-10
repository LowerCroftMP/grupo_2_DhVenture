const express=require('express')
const router=express.Router()

const {perfil}=require('../controllers/users')

router.get("/perfil",perfil)
router.post("/perfil",perfil)

module.exports=router