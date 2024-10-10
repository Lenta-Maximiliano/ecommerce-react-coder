import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CartWidget from './CartWidget/CartWidget';
import logo from '/logo.png'
import './NavBar.css'

export default function NavBar () {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const category = location.pathname.split("/")[2]; 
    setSelectedCategory(category);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <div className="navbar-logo-container">
            <img 
              src={logo}
              alt="imagen logo" 
              className="navbar-logo" />
          </div>
        </Link>
        <div className="navbar-links">
          <ul>
            <li>
              <Link 
                to="/" 
                className={`navbar__link ${!selectedCategory ? 'selected' : ''}`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/category/vinos"
                className={`navbar__link ${selectedCategory === 'vinos' ? 'selected' : ''}`}
              >
                Vinos
              </Link>
            </li>
            <li>
              <Link 
                to="/category/cervezas"
                className={`navbar__link ${selectedCategory === 'cervezas' ? 'selected' : ''}`}
              >
                Cervezas
              </Link>
            </li>
            <li>
              <Link 
                to="/category/sidras"
                className={`navbar__link ${selectedCategory === 'sidras' ? 'selected' : ''}`}
              >
                Sidras
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-logo-container">
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}