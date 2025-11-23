import React from "react";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-4`}>
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="buthrefn"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
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

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./About.js">
              {props.About}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Services.js">
              {props.Services}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Contact.js">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
