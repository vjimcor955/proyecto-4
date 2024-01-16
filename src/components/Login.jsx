import React, { useState } from 'react'

const Login = () => {
  return (
    <form className='login'>
      <div className='login__field'>
        <label htmlFor="login__email">Correo electronico:</label>
        <input type="email" name="email" id="login__email" />        
      </div>
      <div className='login__field'>
        <label htmlFor="login__password">Contraseña:</label>
        <input type="password" name="password" id="login__password" />
      </div>
      <button type='submit'>Iniciar sesión</button>
    </form>
  )
}

export default Login