import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <NavLink to="/" className='footer__link'>Terimnos y Condiciones</NavLink>
        <NavLink to="/" className='footer__link'>Politica de Privacidad</NavLink>
        <NavLink to="/" className='footer__link'>Contacta con nosotros</NavLink>
        <NavLink to="/" className='footer__link'>Desarrolladores</NavLink>
    </footer>
  )
}

export default Footer
