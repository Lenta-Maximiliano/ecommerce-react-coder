import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <p className='footer__text'>© 2024 QueBuenaPINTA. Todos los derechos reservados.</p>
        <nav>
          <ul className='footer__links'>
            <li><a href='/about' className='footer__link'>Sobre Nosotros</a></li>
            <li><a href='/contact' className='footer__link'>Contacto</a></li>
            <li><a href='/privacy' className='footer__link'>Política de Privacidad</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}