import React from "react";
import "./Components.css";
import { useState } from "react";

export default function RegisterForm() {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const handleSubmitButton = () => {
    alert("You have registered succesfully");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form className="contact-form form-validate3" novalidate="novalidate">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            required=""
            autocomplete="off"
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Last Name"
            required=""
            autocomplete="off"
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleEmail}
            className="form-control"
            type="email"
            name="email"
            placeholder="E-mail"
            required=""
            autocomplete="off"
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handlePassword}
            type="password"
            name="pass"
            className="form-control"
            placeholder="Password"
            required=""
            autocomplete="off"
            aria-required="true"
          />
        </div>
        <input
          onClick={handleSubmitButton}
          className="btn btn-md btn-primary btn-center"
          id="sign_up"
          type="button"
          value="Sign Up"
        />
      </form>
    </div>
  );
}
