import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <NavLink to="/" className='footer__link'>Link 1</NavLink>
        <NavLink to="/" className='footer__link'>Link 2</NavLink>
        <NavLink to="/" className='footer__link'>Link 3</NavLink>
        <NavLink to="/" className='footer__link'>Link 4</NavLink>
    </footer>
  )
}

export default Footer
