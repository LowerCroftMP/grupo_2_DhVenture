module.exports = {
    loginValidation: require("./login"),
    registerValidation: require("./register"),
    ...require("./products.validation") // productsValidationStore y productsValidationUpdate
}