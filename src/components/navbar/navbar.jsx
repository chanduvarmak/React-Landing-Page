import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import '../navbar/navbar.css'
function Navbar() {
  return (
    <div className="bg-white">
      <header className="nav-header">
        <nav className="navbar" aria-label="Global">
          <NavLink to="/Home">Home</NavLink>

          <NavLink to="/blog">Blogs</NavLink>

          <NavLink to="/ValidatingForm">Contact</NavLink>

        </nav>
        <Outlet />
      </header>
    </div>
  );
}
export default Navbar;