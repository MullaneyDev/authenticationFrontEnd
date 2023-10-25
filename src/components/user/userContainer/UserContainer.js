import React from 'react'
import Register from '../register/Register'
import Login from '../login/Login'
import "./UserContainer.css"

const UserContainer = ({user, setUser}) => {
  return (
    <div className='userContainer'>
        <Register />
        <Login user={user} setUser={setUser}/>
    </div>
  )
}

export default UserContainer