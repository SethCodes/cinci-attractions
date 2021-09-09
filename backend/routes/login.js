const router = require('express').Router();
const Login = require('../models/Login');


router.route('LoginForm').get((req, res) => {
    Login.find()
    .then((Login) =>res.json(Login))
    .catch(err => console.log(err));
});

router.route('LoginForm/add').post((req, res) =>{
    const username = req.body.username
    const password = req.body.password


    const newLogin= new Login({
        username: username,
        password: password,
    });

    newLogin.save()
    .then(() => res.json('Login add'))
    .catch(err => res.json(`Error: ${err}`));

});