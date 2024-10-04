/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center bg-dark">
        <div className="container text-white py-4 py-lg-5">
            <ul className="list-inline">
                <li className="list-inline-item me-4"><a className="link-light" href="#">Políticas de privacidad</a></li>
                <li className="list-inline-item me-4"><a className="link-light" href="#">Términos y condiciones</a></li>
            </ul>
            <p className="mb-0">© TecnoRemington 2024 - Todos los derechos reservados.</p>
            <p className="mb-0">Desarrollado por Ismael Ruge - Julian Beltran - Diego Aulacio</p>
        </div>
    </footer>
    );
};

export default Footer;
