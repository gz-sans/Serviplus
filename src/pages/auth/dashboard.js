import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";

const Dashboard = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [userFullName, setUserFullName] = useState("");

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await APIInvoke.invokeGET("/Usuarios");
        if (response) {
          setUsuarios(response);
        }
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    obtenerUsuarios();

    const obtenerTickets = async () => {
      try {
        const response = await APIInvoke.invokeGET("/Tickeds");
        if (response) {
          setTickets(response);
        }
      } catch (error) {
        console.error("Error al obtener tickets:", error);
      }
    };

    obtenerTickets();

    const userFirstName = localStorage.getItem("nombrePa") || "";
    const userLastName = localStorage.getItem("apellidoPa") || "";

    setUserFullName(`${userFirstName} ${userLastName}`);
  }, []);

  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#!" role="button">
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/dashboard" className="nav-link">
              Inicio
            </Link>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}

      {/* Barra lateral */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Logo */}
        <a href="#" className="brand-link">
          <span className="brand-text font-weight-light">Mi App</span>
        </a>

        {/* Barra lateral menú */}
        <div className="sidebar">
          {/* Menú de navegación */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Inicio</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/usuarios" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Usuarios</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/configuracion" className="nav-link">
                  <i className="nav-icon fas fa-cog"></i>
                  <p>Configuración</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/crearticked" className="nav-link">
                  <i className="nav-icon fas fa-plus"></i>
                  <p>Crear Ticket</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-plus"></i>
                  <p>salir</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* /.Menú de navegación */}
        </div>
        {/* /.Barra lateral menú */}
      </aside>

      {/* Contenido principal */}
      <div className="content-wrapper">
        {/* Encabezado de la página */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Panel de Administración</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Inicio</Link>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido de la página */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Usuarios Registrados</h3>
                  </div>
                  <div className="card-body">
                    <ul>
                      {usuarios.map((usuario) => (
                        <li key={usuario.id}>
                          {usuario.nombrePa} {usuario.apellidoPa} ({usuario.email})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card.title">Tickets</h3>
                  </div>
                  <div className="card-body">
                    <ul>
                      {tickets.map((ticket) => (
                        <li key={ticket.id}>
                          <strong>Título:</strong> {ticket.titulo}<br />
                          <strong>Descripción:</strong> {ticket.descripcion}<br />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.Contenido de la página */}
      </div>
      {/* /.Contenido principal */}

      {/* Pie de página */}
      <footer className="main-footer">
        {/* Contenido del pie de página */}
      </footer>
    </div>
  );
};

export default Dashboard;
