import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@mitienda.com</p>
          <p>Teléfono: +34 123 456 789</p>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section">
          <h4>Dirección</h4>
          <p>Calle Principal, 123</p>
          <p>Ciudad, País</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 MiTienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
