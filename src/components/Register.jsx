import React from 'react'
import { useUserContext } from '../context/UserContext'

const Register = () => {
  const {handleFieldChangeRegister, nameValidated, emailValidated, buttonDisabled, handleRegister} = useUserContext()

  return (
    <form className='register'>
      <div className='register__field'>
        <label htmlFor="register__name">Nombre Completo:</label>
        <input type="name" name="name" id="register__name" onBlur={handleFieldChangeRegister}/>
      </div>
      <div className='register__field'>
        <label htmlFor="register__email">Correo electronico:</label>
        <input type="email" name="email" id="register__email" onBlur={handleFieldChangeRegister}/>
      </div>
      <div className='register__field'>
        <label htmlFor="register__date">Fecha de nacimiento:</label>
        <input type="date" name="date" id="register__date" onBlur={handleFieldChangeRegister} />
      </div>
      <div className='register__field'>
        <label htmlFor="register__password">Contraseña:</label>
        <input type="text" name="password" id="register__password" onBlur={handleFieldChangeRegister} />
      </div>
      <button disabled={buttonDisabled} type='submit' onClick={handleRegister}>Registrarse</button>
      <div className='validations'>
        {
        nameValidated
        ? <p></p>
        : <p>El nombre solo puede contener letras</p>
        }
        {
        emailValidated
        ? <p></p>
        : <p>Email no valido</p>
        }
      </div>
    </form>
  )
}

export default Register