import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode} px-4`}>
      <NavLink className="navbar-brand" to="/">
        {props.title}
      </NavLink>
      <div className={`form-check form-switch text-${props.mode ==='light' ? "dark": "light" }`}>
  <input
    className="form-check-input"
    type="checkbox"
    onClick={props.toggleMode}
    role="switch"
    id="switchCheckDefault"
    
  />
  <label className="form-check-label" htmlFor="switchCheckDefault">
    Dark mode
  </label>
</div>

      <div className="d-flex ms-auto">
        <ul className="navbar-nav flex-row gap-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              {props.About}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">
              {props.Services}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
