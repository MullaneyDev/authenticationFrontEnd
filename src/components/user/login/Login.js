import React from "react";
import "./Login.css";
import { useState } from "react";
import { loginUser } from "../../../utils";

const Login = ({setUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(username, password);
    await setUser(response.user)
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="usernameLogin"
          placeholder="Username"
          onChange={(e) => handleChange(e, setUsername)}
        />
        <input
          type="password"
          id="passwordLogin"
          placeholder="Password"
          onChange={(e) => handleChange(e, setPassword)}
        />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default Login;
