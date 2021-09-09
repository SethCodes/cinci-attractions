import React, {useState, useEffect} from 'react';
import axios from 'axios';

const LoginForm = ({ isShowLogin }) => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const onSubmit = (e) => {
    const username = e.target.username;
    const password = e.target.password;
    

}


    return (
        <div className={ `${!isShowLogin ? "active" : ""} show`} >
        <div className="login-form">
        <div className="form-box solid">
        <form action="/" method="POST" onSubmit={onSubmit}>
            <h1 className="login-text"> sign In</h1>
            <label>Username</label><br /><br />
            <input type="text"
            name="username"
            className="login-box"
            /> <br /><br />
            <label>Password</label> <br /><br />
            <input 
            type="password"
            name="password"
            className="login-box"
             /> <br /><br />
             <input type="submit" value="Login" className="login-btn" />
             <input type="submit" value="Create Account" className="login-btn" />
             </form>
             </div>
              </div>
             </div>
    );
}

export default LoginForm;

