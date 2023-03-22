import React from "react";
import "~bootstrap/scss/bootstrap.scss";
import * as bootstrap from 'bootstrap';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "~pages/Home";
import Equipo from "~pages/Equipo";
import Servicios from "~pages/Servicios";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/servicios" element={<Servicios />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
