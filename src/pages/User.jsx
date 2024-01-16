import React from 'react'
import { useUserContext } from '../context/UserContext'

const User = () => {
  const {getUserData, email} = useUserContext()
  const userData = getUserData(email)

  return (
    <div className='user'>
      <h1 className='user__title'>Datos Usuario</h1>
      <div className="user__data">
        <ul>
          <li>Nombre: {userData.name}</li>
          <li>Email: {userData.email}</li>
          <li>Fecha de nacimiento: {userData.date}</li>
          <li>Contraseña: {userData.password}</li>
        </ul>
      </div>
    </div>
  )
}

export default User