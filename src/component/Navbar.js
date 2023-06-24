import React from 'react';
import { Link } from 'react-router-dom';

const NavbarContainer = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Customer </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item pe-5">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item pe-5">
              <Link className="nav-link" to="/adduser">Add Contact</Link>
            </li>
            <li className="nav-item pe-5">
              <Link className="nav-link" to="#">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarContainer;
