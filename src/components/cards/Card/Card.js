import React from 'react'
import "./Card.css"
import { deleteUser } from '../../../utils'


const Card = ({user}) => {
  return (
    <div className='card'>
        <p className='username'>{user.username}</p>
        <button className='deleteBtn' onClick={() => deleteUser(user.username)}>Delete User</button>
    </div>
  )
}

export default Card