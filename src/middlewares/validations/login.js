const {check} = require("express-validator")

const fieldMail = check("correo")
.notEmpty().withMessage("El correo es requerido").bail()
.isEmail().withMessage("Ingrese un Email valido")

const fieldPasword = check("contraseña")
.notEmpty().withMessage("Ingrese una contraseña")

module.exports = [fieldMail, fieldPasword]