import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
        <div>
          <h1 className="navbar-logo">Mi Logo</h1>
        </div>
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
        <div>
        <h1 className="navbar-logo">Mi carro</h1>
        </div>
      </div>
    </nav>
  )
}