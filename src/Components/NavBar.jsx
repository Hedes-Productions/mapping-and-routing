import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="usersPage" className="navbar-link">
        Users Page
      </Link>
      <Link to="aboutus" className="navbar-link">
        About Us
      </Link>
      {/* <a href="/" className="navbar-link">
        Home
      </a>
      <a href="usersPage" className="navbar-link">
        UsersPage
      </a>
      <a href="aboutus" className="navbar-link">
        About Us
      </a> */}
    </div>
  );
}

export default NavBar;
