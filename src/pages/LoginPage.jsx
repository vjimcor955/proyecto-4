import Login from "../components/Login"
import Register from "../components/Register"

const LoginPage = () => {

  

  return (
    <div className="formularios">
      <div className="login">
        <Login />
      </div>
      <div className="register">
        <Register />
      </div>
    </div>
  )
}

export default LoginPage