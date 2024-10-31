import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CartWidget from './CartWidget/CartWidget';
import logo from '/logo.png'
import './NavBar.css'
import AccordionMenu from './AccordionMenu/AccordionMenu';

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
        <AccordionMenu />
        <div className="navbar-logo-container">
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}