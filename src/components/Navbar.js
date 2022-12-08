import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import Footer from './Footer';
import './styles/Navbar.css';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prevProp) => !prevProp);
  };

  return (
    <>
      <header data-testid="header">
        <button
          className="nav-button"
          type="submit"
          onClick={() => handleToggle()}
        >
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu
              style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
            />
          )}
        </button>
        <nav className={`${navbarOpen ? 'open' : ''}`}>
          <h1>Math Magicians</h1>
          <ul>
            <li data-testid="home">
              <Link onClick={() => handleToggle()} className="links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleToggle()}
                className="links"
                to="/calculator"
              >
                Calculator
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleToggle()}
                className="links"
                to="/quotes"
              >
                Quotes
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
