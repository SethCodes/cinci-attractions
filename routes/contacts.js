const router = require('express').Router();
const Contact = require('../models/contact');



router.route('/').get((req, res) => {
    Contact.find()
    .then((contact) => res.json(contact))
    .catch(err => console.log(err));
});

router.route('/add').post((req, res) =>{
    const email = req.body.email
    const password = req.body.password


    const newContacts= new Contact({
        email: email,
        password: password,
    });

    newContacts.save()
    .then(() => res.json('Login add'))
    .catch(err => res.json(`Error: ${err}`));

});



module.exports = router;