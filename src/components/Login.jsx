import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

const Login = () => {
  const {user, handleFieldChangeLogin, handleLogin} = useUserContext()

  return (
    <form className='login'>
      <div className='login__field'>
        <label htmlFor="login__email">Correo electronico:</label>
        <input type="email" name="email" id="login__email" onBlur={handleFieldChangeLogin}/>        
      </div>
      <div className='login__field'>
        <label htmlFor="login__password">Contraseña:</label>
        <input type="password" name="password" id="login__password" onBlur={handleFieldChangeLogin}/>
      </div>
      {
        user 
        ? <button type='submit' onClick={handleLogin}>Iniciar sesión</button> 
        : <button type='submit' onClick={handleLogin}><NavLink to="/user" className="button">Iniciar Sesión</NavLink></button>
      }
    </form>
  )
}

export default Login