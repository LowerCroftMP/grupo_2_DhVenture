const {check} = require("express-validator")


const fieldName = check("nombre_apellido")
.notEmpty().withMessage("Debe ingresar su nombre").bail()
.isLength({ min: 2 }).withMessage("Ingrese un nombre válido")

const fieldMail = check("correo_electronico")
.notEmpty().withMessage("El correo es requerido").bail()
.isEmail().withMessage("Ingrese un Email valido")

const fieldPasword = check("contraseña")
.notEmpty().withMessage("Ingrese una contraseña")
.isLength({ min: 8 }).withMessage("Debe tener como mínimo 8 carácteres")
.isAlphanumeric().withMessage("La contraseña debe tener números y letras")

const fieldPasword2 = check("repetir_contraseña")
.notEmpty().withMessage("Debe reingresar su contraseña")


module.exports = [fieldName, fieldMail, fieldPasword, fieldPasword2]