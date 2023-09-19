import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import CrearCuenta from "../pages/auth/crearcuenta";
import Recover from "../pages/auth/recover-password";
import Dashboard from "../pages/auth/dashboard";
import Information from "../pages/auth/miInformacion";
import CrearTicked from "../pages/auth/CrearTicked"; // Importa el nuevo componente

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/informacion" element={<Information />} />
          <Route path="/crearticked" element={<CrearTicked />} /> {/* Agrega esta nueva ruta */}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
