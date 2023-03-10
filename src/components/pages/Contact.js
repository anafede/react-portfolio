import React, { useState } from 'react';
import { emailValidation } from '../../utils/helpers';

function Contact(){
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const { name, email, message } = formState;
    
    const [errorMessage, setErrorMessage] = useState("");
    const handleFormSubmit = (e) =>{
        e.preventDefault();
    }

    const handleInputChange=(e)=> {
      const { target } = e;
      if(e.target.name === "email"){
        const valid = emailValidation(e.target.value);
        if(!valid){
            setErrorMessage('email is not valid');
            return
        }
        if(!name || !message){
            setErrorMessage('must provide input')
        }

      }

    };
    return (
        <div>
            <h2> Contact Form</h2>
            <form className = "form">
                <input
                value = {name}
                name="name"
                onChange = {handleInputChange}
                type="text"
                />
                <input
                value = {email}
                name = "email"
                onChange = {handleInputChange}
                />
                <input
                value = {message}
                name = "message"
                onChange = {handleInputChange}
                />
                <button type = "button" onClick={handleFormSubmit}>Send</button>
            </form>
        </div>
    )
    
}
export default Contact