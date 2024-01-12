import { NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

const Navbar = () => {
  const {user, setUser} = useUserContext()
  const navigate = useNavigate()

  const userLogin = () => {
    setUser(true)
    navigate("/dashboard")
  }
  const userLogout = () => {
    setUser(false)
    navigate("/")
  }

  return (
    <nav className='navbar'>
      <div className='img'>IMAGEN</div>
      <div className='navbar__links'>
        <NavLink to="/" className='navbar__links__link'>Home</NavLink>
        <NavLink to="/search" className='navbar__links__link'>Buscador</NavLink>
        {
          user? (
            <>
              <NavLink to="/dashboard" className='navbar__links__link'>User</NavLink>
              <button className='button' onClick={userLogout}>Logout</button>
            </>
          ) : (
            // <button className='button' onClick={userLogin}>Login</button>
            <NavLink to="/login" className="navbar__links__link">Login</NavLink>
          ) 
        }
      </div>
    </nav>
  )
}

export default Navbar