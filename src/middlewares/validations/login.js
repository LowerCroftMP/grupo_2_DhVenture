const { body } = require("express-validator");
const { loadData } = require("../../database");
const bcrypt = require("bcryptjs");

const fieldEmailDefault = body("email")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isEmail()
  .withMessage("Formato invalido")
  .bail();

const fieldPasswordDefault = body("password")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail();;

const fieldEmailLogin = fieldEmailDefault.custom((value, { req }) => {
  const users = loadData("users");
  const existUser = users.find((a) => a.email === value.trim());
  
  if (!existUser) {
    throw new Error("No se encontró ningún usuario registrado con este correo electrónico");
  }
 
  req.user = existUser; 
  
  return true;
});

const fieldPasswordLogin = fieldPasswordDefault.custom((value, { req }) => {
    if (!req.user) {
        throw new Error("Por favor, ingrese un correo electrónico válido");
    }

    const passwordHash = bcrypt.compareSync(value, req.user.password); 

    if (!passwordHash) {
        throw new Error("La contraseña proporcionada es incorrecta");
    }

    return true;
});

module.exports = {
    loginValidation: [fieldEmailLogin, fieldPasswordLogin],}

//const {check} = require("express-validator")
//
//const fieldMail = check("correo")
//.notEmpty().withMessage("El correo es requerido").bail()
//.isEmail().withMessage("Ingrese un Email valido")
//
//const fieldPasword = check("password")
//.notEmpty().withMessage("Ingrese una contraseña")
//
//module.exports = [fieldMail, fieldPasword]

//me ayudo Pablo Caneda, gracias