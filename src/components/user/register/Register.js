import React from "react";
import "./Register.css";
import { useState } from "react";
import { registerUser } from "../../../utils";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(username,email,password)
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="usernameRegister"
          placeholder="Username"
          onChange={(e) => handleChange(e, setUsername)}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e) => handleChange(e, setEmail)}
        />
        <input
          type="password"
          id="passwordRegister"
          placeholder="Password"
          onChange={(e) => handleChange(e, setPassword)}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
