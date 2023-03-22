import React from 'react'
import Navbar from './Navbar';

const Header = (props) => {
  return (
    <header className="position-relative w-100 vh-100" id={props.id}>
      <Navbar />
        <section className="container-sm d-flex h-100 justify-content-center align-items-start-flex flex-column">
          <h1 className="text-uppercase w-50 fw-bold mb-0 py-4 ps-4 hero-title" style={{fontSize: 60}}>{props.title}</h1>
          <a className="text-uppercase orange w-25 fw-bold text-center py-1 hero-text white-text text-decoration-none" href="/servicios.html" style={{fontSize: 30}}>Conoce más</a>
        </section>
    </header>
  )
}

export default Header
