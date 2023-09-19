import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import CrearCuenta from "../pages/auth/crearcuenta";
import Dashboard from "../pages/auth/dashboard";
import CrearTicked from "../pages/auth/CrearTicked"; // Importa el nuevo componente

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crearticked" element={<CrearTicked />} /> {/* Agrega esta nueva ruta */}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
