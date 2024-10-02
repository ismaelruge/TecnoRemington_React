import React, { useState } from 'react';

const Login = () => {
    // Estados para los campos del formulario de inicio de sesión
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
        if (email && password) {
            alert('Inicio de sesión correcto');

            setEmail('');
            setPassword('');
        } else {
            alert('Por favor ingrese el correo electrónico y la contraseña.');
        }
    };

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Iniciar Sesión</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <label className="form-label" for="email">Correo Electrónico</label>
                                <input className="form-control mb-3" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label className="form-label" for="clave">Contraseña</label>
                                <input className="form-control mb-3" type="password" name="clave" id="clave" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="col-auto mx-auto">
                                <button type="button" className="btn btn-primary" onClick={handleLogin} >Iniciar Sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;