//const { readData, saveData } = require("../../data");
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

const bcrypt = require("bcryptjs");
const { readData, saveData } = require("../../data");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
 
    const {name, lastname, email, password } = req.body;
    const users = readData('users');
    const avatar =  req.file
     const newUser = {
         id:!users.length ? 1 : users[users.length - 1].id + 1 ,
         name:name?.trim(),
         lastname:lastname.trim(),
         email:email.trim(),
         password:bcrypt.hashSync(password?.trim(), 10),
         avatar:avatar ? avatar.filename : 'avatar-por-defecto.png',
         role:"REGULAR"
     };
      console.log(newUser);
      users.push(newUser);

      saveData(users, "users");

      res.redirect("/");
      return;
    } else {
     
      res.redirect("/authentication/registro");
    }

    console.log(errors.array()); 
    res.send(errors.mapped());
}