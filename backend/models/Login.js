const mongoose = require('mongoose')
const Schema = mongoose.Schema 



const loginSchema = new Schema({
    userName: {
        type: String,
        require: [true, 'please enter Username'],
        unique: true,
        trim: true,
        minLength: (4, 'Minimum lenth is 4 characters'),
    },
    password:{
     type: String,
    require: [true, 'Please enter password'],
    unique: true,
    minLength: [6, 'Minium length is 6 characters'], 
    
}
}, {timeStamps: true})

const Login = mongoose.model('Login', loginSchema)
module.exports= Login;