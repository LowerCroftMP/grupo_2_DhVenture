//const {check} = require("express-validator")
//
//
//onst fieldName = check("nombre_apellido")
//notEmpty().withMessage("Debe ingresar su nombre").bail()
//isLength({ min: 2 }).withMessage("Ingrese un nombre válido")
//
//onst fieldMail = check("correo_electronico")
//notEmpty().withMessage("El correo es requerido").bail()
//isEmail().withMessage("Ingrese un Email valido")
//
//onst fieldPasword = check("contraseña")
//notEmpty().withMessage("Ingrese una contraseña")
//isLength({ min: 8 }).withMessage("Debe tener como mínimo 8 carácteres")
//isAlphanumeric().withMessage("La contraseña debe tener números y letras")
//
//onst fieldPasword2 = check("repetir_contraseña")
//notEmpty().withMessage("Debe reingresar su contraseña")
//
//
//odule.exports = [fieldName, fieldMail, fieldPasword, fieldPasword2]

const { body } = require("express-validator");
const { readData } = require("../../data");
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

const fieldEmailDefault = body("email")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isEmail()
  .withMessage("Formato invalido")
  .bail();

const fieldPasswordDefault = body("contrasenia")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail();
  
const fieldEmailRegister = fieldEmailDefault.custom((value, { req }) => {
  const users = readData("users");
  const existUser = users.find((u) => u.email === value.trim());

  if (existUser) {
    throw new Error("Credenciales Invalidas");
  }

  return true;
});

const fieldPasswordRegister = fieldPasswordDefault
  .isLength({ min: 8, max: 16 })
  .withMessage("Longitud invalida")
  .bail()
  .matches(regExPass)
  .withMessage("La contraseña es invalida");



module.exports = {

  registerValidation: [fieldEmailRegister, fieldPasswordRegister],
};

//me ayudo Pablo Caneda, gracias 