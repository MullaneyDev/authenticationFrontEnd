import React from 'react'
import "./Header.css"

const Header = ({user}) => {
  if (!user.token) {
    return (
    <div className="header">
      <h1>MullaneyWorld</h1>
      <h3>Please log in</h3>
    </div>
    );
  }
  return (
    <div className="header">
      <h1>MullaneyWorld</h1>
      <h3>logged in as {user.username}</h3>
    </div>
  );
}

export default Header