import React from 'react'
import Register from '../register/Register'
import Login from '../login/Login'
import "./UserContainer.css"

const UserContainer = ({user, setUser,admin,setAdmin,loggedIn,setLoggedIn}) => {
  return (
    <div className='userContainer'>
        <Register />
        <Login user={user} setUser={setUser} admin={admin} setAdmin ={setAdmin} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </div>
  )
}

export default UserContainer