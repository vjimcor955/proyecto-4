import React from 'react'
import { useState } from 'react'

const Register = () => {
  // Estados
  const [nameValidated, setNameValidated] = useState(true)
  const [emailValidated, setEmailValidated] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birth_date, setBirth_date] = useState('')
  const [password, setPassword] = useState('')


  // Funciones
  // Funcion que valida que el nombre se introduzca correctamente
  const validateName = (name) => {
    const regex = /^[a-záéíóúüñ\s]+$/i
    const test = regex.test(name)
    setNameValidated(test)
    return test
  }
  // Funcion que comprueba que el email se introduzca correctamente
  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/
    const test = regex.test(email) 
    setEmailValidated(test)
    return test
  }
  // Funcion para activar o desactivar el boton
  const validateData = () => {
    if (validateName === false || validateEmail === false) {
      return true
    }
    return false
  }
  // Funcion que controla los cambion en el campo del nombre y lo asigna a su estado si es valido
  const handleNameChange = (e) => {
    if (validateName(e.target.value)) {
      setName(e.target.value)
    }
  }
  // Funcion que controla los cambios en el campo del email y lo asigna a su estado si es valido
  const handleEmailChange = (e) => {
    if (validateEmail(e.target.value)) {
      setEmail(e.target.value)
    }
  }
  // Objeto con los datos de registro del usuario para ser guardados en el localStorage
  var userData = {
    name: "",
    email: "",
    birth_date: "",
    password: ""
  }

  const handleRegister = () => {
    userData.name = name
    userData.email = email
    userData.birth_date = birth_date
    userData.password = password

    const usersLS = JSON.parse(localStorage.getItem("Users"))
    if (usersLS === null) {
      usuarios = []
      localStorage.setItem("Users", JSON.stringify(userData))
    } else {
      usuarios.push(userData)
      localStorage.setItem("Users", JSON.stringify(userData))
    }
  }


  return (
    <form className='register'>
      <div className='register__field'>
        <label htmlFor="register__name">Nombre Completo:</label>
        <input type="name" name="name" id="register__name" onBlur={handleNameChange}/>
      </div>
      <div className='register__field'>
        <label htmlFor="register__email">Correo electronico:</label>
        <input type="email" name="email" id="register__email" onBlur={handleEmailChange}/>
      </div>
      <div className='register__field'>
        <label htmlFor="register__date">Fecha de nacimiento:</label>
        <input type="date" name="date" id="register__date" onBlur={(e) => setBirth_date(e.target.value)} />
      </div>
      <div className='register__field'>
        <label htmlFor="register__password">Contraseña:</label>
        <input type="text" name="password" id="register__password" onBlur={(e) => setPassword(e.target.value)} />
      </div>
      <button type='submit' onClick={handleRegister}>Registrarse</button>
      {/* <button type='submit' onClick={handleRegister} disabled={validateData}>Registrarse</button> */}
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