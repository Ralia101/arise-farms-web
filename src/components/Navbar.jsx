import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowUpRight, Menu, ShoppingBag, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/farmsarise.png" alt="Arise Farms Logo" className="logo-image" />
          <span className="logo-text">Arise <em>Farms</em></span>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Overview</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#products" onClick={() => scrollToSection('products')}>Products</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <button className="cart-icon-btn" onClick={() => setIsCartOpen(true)} aria-label="Open cart">
          <ShoppingBag size={19} />
          <span className="cart-label">Bag</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
        <a className="nav-pi-link" href="#contact">Pay with Pi <ArrowUpRight size={15} /></a>
      </div>
    </nav>
  );
}

export default Navbar;

