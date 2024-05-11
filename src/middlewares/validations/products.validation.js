const { check, body } = require("express-validator");
const path = require("path");

const regExpFiles = /.png|.jpg|.jpeg|.webp|.gif/i;

const fieldProduct = check("title")
  .notEmpty()
  .withMessage("El producto es requerido")
  .bail()
  .isAlphanumeric("es-ES", { ignore: " .," })
  .withMessage("El producto debe ser alfanumerico")
  .bail()
  .isLength({ min: 5, max: 100 })
  .withMessage("El producto debe tener un minimo de 5 caracteres");

const fieldDescription = check("description")
  .notEmpty()
  .withMessage("La descripción es requerido")
  .bail()
  .isAlphanumeric("es-ES", { ignore: " .," })
  .withMessage("La descripción debe ser alfanumerico")
  .bail()
  .isLength({ min: 30, max: 500 })
  .withMessage(
    "La descripción debe tener un minimo de 30 y un maximo de 500 caracteres");

const fieldCategory = check("category")
  .not()
  .isIn([""])
  .withMessage("La categoria es requerida");
  
  const fieldPrice = check("price")
  .notEmpty()
  .withMessage("El precio es requerido")
  .bail()
  .isNumeric()
  .withMessage("El precio debe ser numerico")
  .bail()
  .isInt({ min: 0 })
  .withMessage("El precio debe tener un valor positivo")
  .bail()
  .isDecimal()
  .withMessage("El precio debe ser decimal");

const fieldImagePrincipalStore = body("imagePrincipal").custom(
  (value, { req }) => {
    const lengthImages = req.files?.imagePrincipal?.length;

    if (!lengthImages) throw new Error("Debes ingresar una imagen principal");
    else {
      if (lengthImages > 1)
        throw new Error("No puedes ingresar mas de 1 archivo");

      const extFile = path.extname(req.files.imagePrincipal[0].originalname);
      const isFormatSuccess = regExpFiles.test(extFile);

      if (!isFormatSuccess)
        throw new Error("El formato de la imagen principal es invalido");
    }
    return true;
  }
);

const fieldImagesSecondaryStore = body("imagesSecondary").custom(
  (value, { req }) => {
    const lengthImages = req.files?.imagesSecondary?.length;

    if (!lengthImages) throw new Error("Debes ingresar imagenes secundarias");
    else {
      if (lengthImages > 3)
        throw new Error("No puedes ingresar mas de 3 archivos");
      const imagesSecondary = req.files.imagesSecondary;
      const existSomeFormatInvalid = imagesSecondary.some((img) => {
        const extFile = path.extname(img.originalname);
        return regExpFiles.test(extFile);
      });
      if (existSomeFormatInvalid)
        throw new Error(
          "Uno de los archivos son invalidos. Formatos validos: .png .jpg .jpeg .webp .gif"
        );
    }
    return true;
  }
);

const fieldImagePrincipalUpdate = body("imagePrincipal").custom(
  (value, { req }) => {
    const lengthImages = req.files?.imagePrincipal?.length;

    if (lengthImages) {
      if (lengthImages > 1)
        throw new Error("No puedes ingresar mas de 1 archivo");

      const extFile = path.extname(req.files.imagePrincipal[0].originalname);
      const isFormatSuccess = regExpFiles.test(extFile);

      if (!isFormatSuccess)
        throw new Error("El formato de la imagen principal es invalido");
    }
    return true;
  }
);

const fieldImagesSecondaryUpdate = body("imagesSecondary").custom(
  (value, { req }) => {
    const lengthImages = req.files?.imagesSecondary?.length;

    if (lengthImages) {
      if (lengthImages > 3)
        throw new Error("No puedes ingresar mas de 3 archivos");

      const imagesSecondary = req.files.imagesSecondary;
      const existSomeFormatInvalid = imagesSecondary?.some((img) => {
        const extFile = path.extname(img.originalname);
        return regExpFiles.test(extFile);
      });

      if (existSomeFormatInvalid)
        throw new Error(
          "Uno de los archivos son invalidos. Formatos validos: .png .jpg .jpeg .webp .gif"
        );
    }

    return true;
  }
);

const defaultValidationFiels = [
    fieldProduct,  
    fieldDescription,
    fieldCategory,
    fieldPrice,
];

module.exports = {
  productsValidationStore: [
    ...defaultValidationFiels,
    fieldImagePrincipalStore,
    fieldImagesSecondaryStore,
  ],
  productsValidationUpdate: [
    ...defaultValidationFiels,
    fieldImagePrincipalUpdate,
    fieldImagesSecondaryUpdate,
  ],
};
