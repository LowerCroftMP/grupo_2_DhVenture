const { readData } = require("../../data");
const bcrypt = require('bcryptjs')

module.exports = (req, res) => {
    const { email, contrasenia } = req.body;

    const users = readData('users')

    const userFind = users.find((u) => u.email === email);

    if (!userFind) res.send('El usuario no existe');

    const isPasswordValid = bcrypt.compareSync(contrasenia, userFind.contrasenia)

    if (!isPasswordValid) res.send('La contraseña es incorrecta')

    req.session.userLogin = {
        nombre: userFind.nombre,
        apellido: userFind.apellido,
        imagen: userFind.imagen,
        rol:userFind.rol
    }

    if(remember) res.cookie("userLogin", req.session.userLogin, {maxAge: 6000 * 30})

    res.redirect('/')
}