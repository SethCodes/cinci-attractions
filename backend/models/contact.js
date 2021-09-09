const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
   
    
    email: {
        type: String,
        require: [true, 'please enter email'],
        unique: true,
        lowercase: true,
    },
    password:{
     type: String,
    require: [true, 'Please enter password'],
    minLength: [6, 'Minium length is 6 characters']
},
     
 
     

}, {timestamps: true })

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;