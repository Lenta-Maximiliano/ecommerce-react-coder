import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AccordionMenu.css';

function AccordionMenu() {
  const [openSection, setOpenSection] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();

  const toggleSection = (index) => {
    if (window.innerWidth < 767) {
      setOpenSection(prevSection => (prevSection === index ? null : index));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setOpenSection(null); 
      }
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const category = location.pathname.split("/")[2]; 
    setSelectedCategory(category);
  }, [location]);

  return (
    <nav className="navbar-links">
          <Link 
            to="/" 
            className={`accordion-toggle ${!selectedCategory ? 'selected' : ''}`}
            onClick={() => toggleSection(0)}
          >
            Inicio
          </Link>
          <ul className={`accordion-content ${openSection === 0 ? 'open' : ''}`}>
            <Link to="/category/cervezas" className={`navbar-menu-link ${selectedCategory === 'cervezas' ? 'selected' : ''} `}>Cervezas</Link>
            <Link to="/category/vinos" className={`navbar-menu-link ${selectedCategory === 'vinos' ? 'selected' : ''} `}>Vinos</Link>
            <Link to="/category/sidras" className={`navbar-menu-link ${selectedCategory === 'sidras' ? 'selected' : ''} `}>Sidras</Link>
          </ul>
    </nav>
  );
}

export default AccordionMenu;
