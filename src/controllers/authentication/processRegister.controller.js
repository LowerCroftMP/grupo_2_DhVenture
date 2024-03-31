const { readData, saveData } = require("../../data");
const bcrypt = require('bcryptjs')

module.exports = (req, res) => {
    
    const {name, lastname, email, password } = req.body;
    const users = readData('users');

    const newUser = {
        id:!users.length ? 1 : [users.length - 1].id + 1 ,
        name:name?.trim(),
        lastname:lastname.trim(),
        email:email.trim(),
        password:bcrypt.hashSync(password?.trim(), 10),
        avatar:"",
        role:"REGULAR"
    };
    
    users.push(newUser);

    saveData(users, 'users');

    res.redirect('/');
};