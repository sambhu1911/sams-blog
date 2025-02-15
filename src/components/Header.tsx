import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Kora Kagaz</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;