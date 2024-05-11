const bcrypt = require("bcryptjs");
const { loadData, saveData } = require("../../database");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
    const errors = validationResult(req);
    const formData = req.body || {};

    if (!errors.isEmpty()) {       
        return res.status(400).render('register', {
            errors: errors.array(),
            formData: formData
        });
    }

    const users = loadData('users');
    const userExists = users.some(user => user.email === req.body.email.trim());

    if (userExists) {
        errors.errors.push({
            msg: 'El correo electrónico ya está registrado.',
            param: 'email',
            location: 'body'
        });

        return res.status(400).render('register', {
            errors: errors.array(),
            formData: formData
        });
    }

    const avatar = req.file ? req.file.filename : 'avatar-por-defecto.png';
    const newUser = {
        id: users.length === 0 ? 1 : users[users.length - 1].id + 1,
        name: req.body.name.trim(),
        lastname: req.body.lastname.trim(),
        email: req.body.email.trim(),
        password: bcrypt.hashSync(req.body.password.trim(), 10),
        avatar: avatar,
        role: "REGULAR"
    };

    users.push(newUser);
    saveData(users, "users");

    res.redirect('/authentication/acceso');
}; 


//const { readData, saveData } = require("../../database");
//const bcrypt = require('bcryptjs')
//
//module.exports = (req, res) => {
//    
//    const {name, lastname, email, password } = req.body;
//    const users = readData('users');
//    const avatar =  req.file;
//
//    const newUser = {
//        id:!users.length ? 1 : users[users.length - 1].id + 1 ,
//        name:name?.trim(),
//        lastname:lastname.trim(),
//        email:email.trim(),
//        password:bcrypt.hashSync(password?.trim(), 10),
//        avatar:avatar ? avatar.filename : 'avatar-por-defecto.png',
//        role:"REGULAR"
//    };
//    
//    users.push(newUser);
//
//    saveData(users, 'users');
//
//    res.redirect('/');
//};

