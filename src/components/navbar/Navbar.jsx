import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-body py-3">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
                            <img className="rounded img-fluid" src={require('../../assets/logo.jpeg')} width="40" height="30" alt="Logo" />
                        </span>
                        <span>TecnoRemington</span>
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-3">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navcol-3" className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link active" href="#Inicio">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Servicios">Servicios</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Acercade">Acerca de</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Contactenos">Contactenos</a></li>
                        </ul>
                        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Iniciar Sesión</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
