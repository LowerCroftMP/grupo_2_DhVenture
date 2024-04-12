const { readData } = require("../../data");
const bcrypt = require('bcryptjs')

module.exports = (req, res) => {
    const { email, password, remember } = req.body;

    const users = readData('users')

    const userFind = users.find((u) => u.email === email);

    if (!userFind) res.redirect('/authentication/acceso');
    //send('El usuario no existe');

    const isPasswordValid = bcrypt.compareSync(password, userFind.password);

    if (!isPasswordValid) res.redirect('/authentication/acceso');
    //send('La contraseña es incorrecta')

    req.session.userLogin = {
        name: userFind.name,
        lastname: userFind.lastname,
        avatar: userFind.avatar,
        role: userFind.role
    }

    if (remember) { res.cookie("userLogin", req.session.userLogin, { maxAge: 6000 * 30 }) };

    res.redirect("/users/perfil")
    
}