import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import './styles/Navbar.css';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prevProp) => !prevProp);
  };

  return (
    <header>
      <button
        className="nav-button"
        type="submit"
        onClick={() => handleToggle()}
      >
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <nav className={`${navbarOpen ? 'open' : ''}`}>
        <h1>Math Magicians</h1>
        <ul>
          <li>
            <Link
              onClick={() => handleToggle()}
              className="links"
              to="/math_magicians/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleToggle()}
              className="links"
              to="/math_magicians/calculator"
            >
              Calculator
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleToggle()}
              className="links"
              to="/math_magicians/quotes"
            >
              Quotes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
