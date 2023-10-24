import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <input type="text" id="usernameLogin" placeholder="Username"></input>
        <input type="password" id="passwordLogin" placeholder="Password"></input>
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

export default Login