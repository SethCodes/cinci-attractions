import React, {useState, useEffect}from 'react'
import BACKEND_URL from "../config";
import axios from 'axios';


    

const ContactForm = () => {

    const [name, getName] = useState("");
    const [email, getEmail] = useState("");
    const [subject, getSubject] = useState("");
    const [message, getMessage] = useState("");
    
    const onChangeName = (e) => {
        getName(e.target.value);
    }
    const onChangeEmail = (e) => {
        getEmail(e.target.value);
    }
    const onChangeSubject = (e) => {
        getSubject(e.target.value);
    }
    const onChangeMessage = (e) => {
        getMessage(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
    
        const User = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
    
       axios.get(BACKEND_URL +' /ContactForm/add', User)
       .then(res => console.log(res.data))
       .catch(err => console.log(err));
    }
    return (
         
        <div className="contact-form">
            <div className="form-box solid">
            <form action="/" method="POST" onSubmit={onSubmit}>
                <h1 className="contact-text"> Contact us</h1>
                <label>Name</label><br /><br />
                <input type="text"
                name="name"
                className="contact-box"
                onChange={onChangeName}
                /> <br /><br />
                <label>Email</label><br /><br />
                <input type="text"
                email="email"
                className="contact-box"
                onChange={onChangeEmail}
                /> <br /><br />
                <label>Subject</label><br /><br />
                <input type="text"
                name="subject"
                className="contact-box"
                onChange={onChangeSubject}
                /> <br /><br />
                <label>Message</label> <br /><br />
                <input 
                type="text"
                name="message"
                className="contact-box"
                onChange={onChangeMessage}
                /> <br /><br />
                <input type="submit" value="Contact" className="contact-btn" />
            </form>
            </div>
        </div>
              
       
       
       
      
       
    );
}
export default ContactForm;
