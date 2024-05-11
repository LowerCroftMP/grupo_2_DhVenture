const express = require("express");
const router = express.Router();
const { processRegister, login, processLogin, registro, logout } = require("../controllers/authentication");
const { registerValidation } = require("../middlewares/validations/register");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Rutas
router.get("/registro", registro);
router.post("/registro", upload.single('avatar'), registerValidation, processRegister);

router.get("/acceso", login);
router.post("/acceso", processLogin);

router.get("/cerrar-sesion", logout);

module.exports = router; 

/*
const express = require("express");
const router = express.Router();
const { login, processLogin, processRegister, registro, logout } = require("../controllers/authentication");
const { registerValidation } = require("../middlewares/validations/register");
const { loginValidation } = require("../middlewares/validations/login");

// Rutas
//  /autenticacion/iniciar
router.get("/acceso", login);
router.post("/acceso", loginValidation, processLogin);

//  /autenticacion/registrar
router.get("/registro", registro);

router.post("/registro", registerValidation, processRegister)

router.get("/cerrar-sesion", logout)


module.exports = router;
*/