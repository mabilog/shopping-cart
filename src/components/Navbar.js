import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link to="/" ><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/profile"><li>Profile</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar;