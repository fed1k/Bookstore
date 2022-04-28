import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div>
      <h1>Bookstore CMS</h1>
      <ul>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/Categories">CATEGORIES</Link></li>
      </ul>
    </div>
    <IoIosPerson className="user-icons" />
  </nav>
);

export default Navbar;
