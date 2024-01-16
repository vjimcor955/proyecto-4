import Login from "../components/Login"
import Register from "../components/Register"

const LoginPage = () => {

  

  return (
    <div className="formularios">
      <div className="login__div">
        <h1 className="formularios__title--login">Login</h1>
        <Login />
      </div>
      <div className="register__div">
        <h1 className="formularios__title--register">Registrarse</h1>
        <Register />
      </div>
    </div>
  )
}

export default LoginPage