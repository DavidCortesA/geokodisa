import React from 'react';
import GeokodisaLogo from '../assets/Geokodisa-logo.jpg';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-md fixed-top navbar-light white">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        <img src={GeokodisaLogo} style={{height: '45px', mixBlendMode: 'darken'}} />
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-controls="collapse" aria-expanded="false">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="content">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
          <li className="nav-item">
            <NavLink className="nav-link" to="/">INICIO</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/equipo">EQUIPO</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/servicios">SERVICIOS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link orange rounded px-3" to="/#contacto">CONTACTO</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
