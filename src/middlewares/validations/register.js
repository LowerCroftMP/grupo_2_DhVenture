const { body } = require("express-validator");
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

module.exports = {registerValidation: [
  body('name', 'El nombre es requerido y no puede estar vacío.')
    .trim().not().isEmpty(),
  body('lastname', 'El apellido es requerido y no puede estar vacío.')
    .trim().not().isEmpty(),
  body('email', 'Ingrese un email válido.')
    .trim().isEmail(),
  body('password', 'La contraseña debe tener al menos 8 caracteres y un máximo de 16 caracteres.')
    .trim().isLength({ min: 8, max: 16 }),
  body('password','La contraseña debe incluir al menos una letra mayúscula, una minúscula y un número.')
    .matches(regExPass)
]};

/*
const { body } = require("express-validator");
const { loadData } = require("../../database");
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

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
  .bail()
  .custom(value => {
    console.log ('Password recibido para validación:', value)
    return true;
  })
  
const fieldEmailRegister = fieldEmailDefault.custom((value, { req }) => {
  const users = loadData("users");
  const existUser = users.find((u) => u.email === value.trim());

  if (existUser) {
    throw new Error("El email ya está registrado");
  }

  return true;
});

const fieldPasswordRegister = fieldPasswordDefault
  .isLength({ min: 8, max: 16 })
  .withMessage("Longitud invalida")
  .bail()
  .matches(regExPass)
  .withMessage("La contraseña debe incluir al menos una letra mayúscula, una minúscula y un número");

const fieldEmailLogin = fieldEmailDefault.custom((value, { req }) => {});

const fieldPasswordLogin = fieldPasswordDefault.custom((value, { req }) => {});

module.exports = {
  registerValidation: [fieldEmailRegister, fieldPasswordRegister],
};
*/

//me ayudo Pablo Caneda, gracias 