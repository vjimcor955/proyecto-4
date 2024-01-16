import { NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

const Navbar = () => {
  const {user, setUser} = useUserContext()
  const navigate = useNavigate()

  const userLogout = () => {
    setUser(false)
    navigate("/")
  }

  return (
    <nav className='navbar'>
      <img src="./pokemon_logo.png" alt="Logo Pokemon" />
      <div className='navbar__links'>
        <NavLink to="/" className='navbar__links__link'>Home</NavLink>
        <NavLink to="/search" className='navbar__links__link'>Buscador</NavLink>
        {
          user? (
            <>
              <NavLink to="/user" className='navbar__links__link'>User</NavLink>
              <button className='button' onClick={userLogout}>Logout</button>
            </>
          ) : (
            <button><NavLink to="/login" className='button'>Login</NavLink></button>
          ) 
        }
      </div>
    </nav>
  )
}

export default Navbar