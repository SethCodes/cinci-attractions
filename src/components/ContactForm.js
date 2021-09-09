import React, {useState, useEffect}from 'react'
import BACKEND_URL from "../config";
{/*import Signup from '../../backend/models';*/}
import axios from 'axios';


const ContactForm = ({ isShowLogin }) => {
    console.log(BACKEND_URL);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onChangeName = (e) => {
        setUsername(e.target.value);
    }
    const onChangePass = (e) => {
        setPassword(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
    
        const newLogin = {
            email: email,
            password: password
        }
    
       axios.get(BACKEND_URL +' /ContactForm/add', newUser)
       .then(res => console.log(res.data))
       .catch(err => console.log(err));



const ContactForm = () => {
    return (
        <div className={ `${!isShowLogin ? "active" : ""} show`} >
        <div className="login-form">
        <div className="form-box solid">
        <form action="/" method="POST" onSubmit={onSubmit}>
            <h1 className="login-text"> sign In</h1>
            <label>Email</label><br /><br />
            <input type="text"
            name="username"
            className="login-box"
            onChange={onChangeName}
            /> <br /><br />
            <label>Password</label> <br /><br />
            <input 
            type="password"
            name="password"
            className="login-box"
            onChange={onChangePass}
             /> <br /><br />
             <input type="submit" value="Login" className="login-btn" />
             <input type="submit" value="Create Account" className="login-btn" />
             </form>
             </div>
              </div>
             </div>
    );
}
    


export default ContactForm;










