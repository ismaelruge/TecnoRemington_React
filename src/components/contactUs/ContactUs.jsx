import React, { useState } from 'react';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hola ${name}, se te enviará un correo a ${email} cuando nuestros asesores hayan analizado tu mensaje, muchas gracias.`);
    };

    return (
        <section id="Contactenos" className="position-relative my-3">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-xxl-4 offset-md-6 offset-xl-7 offset-xxl-8">
                        <form id="formContact" className="border rounded shadow p-3 p-md-4" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nameContact" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nameContact" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailContact" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="emailContact" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="messageContact" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="messageContact" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
