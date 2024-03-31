const { readData } = require("../../data");
const bcrypt = require('bcryptjs')

module.exports = (req, res) => {
    const { email, contrasenia } = req.body;

    res.redirect('/')
}