import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import '../navbar/navbar.css'
import reactLogo from '../../assets/reactLogo.png'
function Navbar() {
  return (
    <div className="bg-white">
      <header className="nav-header">
        <nav className="navbar" aria-label="Global">
          {/* <img src={reactLogo} alt="Logo" className="logo" /> */}
          <NavLink to="/Home" className="logo-link"> {/* Wrap logo with NavLink */}
            <img src={reactLogo} alt="Logo" className="logo" /> {/* Add the logo */}
          </NavLink>
          <NavLink to="/Home">Home</NavLink>

          <NavLink to="/Blog">Blogs</NavLink>

          <NavLink to="/ContactForm">Contact</NavLink>

        </nav>
        <Outlet />
      </header>
    </div>
  );
}
export default Navbar;