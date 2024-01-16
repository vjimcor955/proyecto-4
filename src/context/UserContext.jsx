import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(true)

const UserProvider = ({children}) => {
  const [user, setUser] = useState(false)

  const [nameValidated, setNameValidated] = useState(true)
  const [emailValidated, setEmailValidated] = useState(true)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const userDataRegister = {
    name: "",
    email: "",
    date: "",
    password: ""
  }
  const userDataLogin = {
    email: "",
    password: ""
  }
  const [email, setEmail] = useState('')
  const showUserData = {
    name: "",
    email: "",
    date: "",
    password: ""
  }

  // Funcion que valida que el nombre se introduzca correctamente
  const validateName = (name) => {
    const regex = /^[a-záéíóúüñ\s]+$/i
    const test = regex.test(name)
    setNameValidated(test)
    console.log(`Name: ${test}`)
    return test
  }

  // Funcion que comprueba que el email se introduzca correctamente
  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/
    const test = regex.test(email) 
    setEmailValidated(test)
    console.log(`Email: ${test}`)
    return test
  }

  // Funcion para activar o desactivar el boton
  const activateButton = () => {
    if (nameValidated === false || emailValidated === false) {
      console.log(`Data: ${test}`)
      setButtonDisabled(true)
    }
    console.log(`Data: ${test}`)
    setButtonDisabled(false)
  }

  // Function that takes the data of the register form, validates it and stores it in an object
  const handleFieldChangeRegister = (e) => {
    if (e.target.name === "name" && validateName(e.target.value)) {
      userDataRegister[e.target.name] = e.target.value     
    } else if (e.target.name === "email" && validateEmail(e.target.value)) {
      userDataRegister[e.target.name] = e.target.value      
    }
    userDataRegister[e.target.name] = e.target.value
  }
  // Function that takes the data of the login form, validates it and stores it in an object
  const handleFieldChangeLogin = (e) => {
    if (e.target.name === "email") {
      userDataLogin[e.target.name] = e.target.value     
    } else if (e.target.name === "password") {
      userDataLogin[e.target.name] = e.target.value      
    }
  }
  
  // Function that manages the login system
  const handleLogin = (e) => {
    e.preventDefault()
    const data = JSON.parse(localStorage.getItem("Users"))
    data.map(user => {
      if (user.email === userDataLogin.email && user.password === userDataLogin.password) {
        setEmail(userDataLogin.email)
        setUser(true)
      }
    })
  }

  // Function to set users in localStorage
  const handleRegister = (e) => {
    e.preventDefault()
    const usersLS = JSON.parse(localStorage.getItem("Users"))
    var users = []
    if (usersLS != null) {
      users = usersLS
    }
    console.log(users)
    users.push(userData)
    localStorage.setItem("Users", JSON.stringify(users))
  }

    // Function gets an user data
    const getUserData = (email) => {
      const data = JSON.parse(localStorage.getItem("Users"))
      data.map(user => {
        if (user.email === email) {
          showUserData['name'] = user.name
          showUserData['email'] = user.email
          showUserData['date'] = user.date
          showUserData['password'] = user.password
        }
      })
      return showUserData
    }

    useEffect(() => {
      getUserData()
    })




  return (
    <UserContext.Provider value={{user, setUser, nameValidated, emailValidated, buttonDisabled, handleFieldChangeRegister, handleFieldChangeLogin, handleLogin, handleRegister, getUserData, email}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

export const useUserContext = () => useContext(UserContext)