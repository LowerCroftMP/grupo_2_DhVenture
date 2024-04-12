//const {check} = require("express-validator")
//
//const fieldMail = check("correo")
//.notEmpty().withMessage("El correo es requerido").bail()
//.isEmail().withMessage("Ingrese un Email valido")
//
//const fieldPasword = check("contraseña")
//.notEmpty().withMessage("Ingrese una contraseña")
//
//module.exports = [fieldMail, fieldPasword]

const { body } = require("express-validator");
const { readData } = require("../../data");
const bcrypt = require("bcryptjs");


const fieldEmailDefault = body("email")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isEmail()
  .withMessage("Formato invalido")
  .bail();

const fieldPasswordDefault = body("contraseña")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail();;

  const fieldEmailLogin = fieldEmailDefault.custom((value, { req }) => {
    const users = readData("users");
    const user = users.find((a) => a.email === value.trim());
  
    if (!user) {
        throw new Error("No se encontró ningún usuario registrado con este correo electrónico");
    }
  
    req.user = user; 
  
    return true;
});

const fieldPasswordLogin = fieldPasswordDefault.custom((value, { req }) => {
    if (!req.user) {
        throw new Error("Por favor, ingrese un correo electrónico válido");
    }

    const contraseñaHash = bcrypt.compareSync(value, req.user.contraseña); 

    if (!contraseñaHash) {
        throw new Error("La contraseña proporcionada es incorrecta");
    }

    return true;
});

module.exports = {
    loginValidation: [fieldEmailLogin, fieldPasswordLogin],}


//me ayudo Pablo Caneda, gracias