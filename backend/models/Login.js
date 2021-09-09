const mongoose = require('mongoose')
const Schema = mongoose.schema 



const loginSchema = new  mongoose.schema({
    userName: {
        type: String,
        require: [true, 'please enter Username'],
        unique: true,
        lowercase: true,
    },
    password:{
     type: String,
    require: [true, 'Please enter password'],
    minLength: [6, 'Minium length is 6 characters']
}
}, {timeStamps: true})

const Login = mongoose.model('Login', loginSchema)
model.export= Login;