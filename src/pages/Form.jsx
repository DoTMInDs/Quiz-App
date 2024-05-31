import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const [email,setEmail] = useState('');
  const [password,SetPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();

    setErrors(errors);
   
  }

  const move = () => {
    if (Object.keys(errors).length===0) {
      navigate('/Quiz');
    }
  }

  const validate = () => {
    const errors = [];

    if (!email) {
      errors.email = "Please enter your email...";
    }
    
    else{
      errors.email = "";
    }

    if (!password) {
      errors.password = "Please enter your password...";
    }
    else if(password.length < 8){
      errors.password = "Password should have at least 8 chars...";
    }
    else{
      errors.password = "";
    }

    return errors;
  }

  return (
    <div className="form-container">
      <div className="flex-ads">
        <p className="ads">Welcome to the home page of the Quiz app</p>
        <p className="code-border">#Coding Quiz</p>
      </div>
      <div className="bg-contains">
        <div className="contain">
          <div className="flex-text">
            <h1 className="quiz-app">Quiz App</h1>
            <h3 className="welc">Welcome!</h3>
            <h4 className="codn-qui">To the Coding Quiz-App</h4>
            <p className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum,
              sint reiciendis voluptates, excepturi voluptate tempore voluptas
              deserunt deleniti adipisci modi quae eaque mollitia nulla iste ex
              delectus
            </p>
          </div>
          <div className="form-contain">
            <form onSubmit={handleSubmit}>
              <h2 className="login">Login</h2>  
                <div className="input-field">
                  <img src="src/assets/mail_24dp_FILL0_wght400_GRAD0_opsz24(1).png" alt="" />
                  <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/> <br />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="input-field">
                  <img src="src/assets/lock_24dp_FILL0_wght400_GRAD0_opsz24(1).png" alt="" />
                  <input type="password" onChange={(e) => SetPassword(e.target.value)} placeholder="Password" required/> <br />
                  {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <div className="btn">
                  <button onClick={move}>Submit</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
