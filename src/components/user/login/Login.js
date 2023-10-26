import React from "react";
import "./Login.css";
import { useState } from "react";
import { loginUser } from "../../../utils";

const Login = ({ setUser, setAdmin ,setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(username, password);
    await setMessage(response.message);
    if (response.message === "Successful login") {
      await setUser(response.user);
      await setAdmin(response.user.isAdmin);
      await setLoggedIn(true)
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="usernameLogin"
          placeholder="Username"
          required={true}
          onChange={(e) => handleChange(e, setUsername)}
        />
        <input
          type="password"
          id="passwordLogin"
          placeholder="Password"
          required={true}
          onChange={(e) => handleChange(e, setPassword)}
        />
        <input type="submit" value="Log in" />
      </form>
      <h2>{message}</h2>
    </div>
  );
};

export default Login;
