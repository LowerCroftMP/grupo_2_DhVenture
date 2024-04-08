const express = require("express");
const router = express.Router();
const { login, processLogin, processRegister, registro } = require("../controllers/authentication");
const { registerValidation } = require("../middlewares/validations/register");
const { loginValidation } = require("../middlewares/validations/login");

// Rutas
router.get("/acceso", login);
router.post("/acceso", loginValidation, processLogin);

router.get("/registro", registro);

router.post("/registro", registerValidation, processRegister)


module.exports = router;