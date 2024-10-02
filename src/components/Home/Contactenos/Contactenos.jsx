/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const ContactUs = () => {
    // Estados para los campos del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        const dtn = {
            nombre: name,
            correo: email,
            mensaje: message,
        };

        alert(`Hola ${dtn.nombre}, se te enviará un correo a ${dtn.correo} cuando nuestros asesores hayan analizado tu mensaje, muchas gracias.`);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="Contactenos" className="position-relative my-3">
            <div className="d-none d-md-block position-absolute mx-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.3947207432!2d-74.27262552044822!3d4.648620643934393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1726791635596!5m2!1ses!2sco"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="position-relative"> {/* my-5 m-md-5" */}
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-xxl-4 offset-md-6 offset-xl-7 offset-xxl-8">
                            <div>
                                <form id="formContact" className="border rounded shadow p-3 p-md-4 p-lg-5"  onSubmit={handleSubmit} style={{background: 'var(--bs-body-bg)'}} >
                                    <h3 className="text-center mb-3"><span style={{ color: 'var(--bs-secondary-color)' }}>Contáctenos</span></h3>
                                    <div className="mb-3"><input className="form-control" type="text" id="nameContact" name="name" placeholder="Nombre Completo" value={name} onChange={(e) => setName(e.target.value)} required /></div>
                                    <div className="mb-3"><input className="form-control" type="email" id="emailContact" name="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
                                    <div className="mb-3"><textarea className="form-control" name="message" id="messageContact" placeholder="Mensaje" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea></div>
                                    <div className="mb-3"><button className="btn btn-primary" type="submit">Enviar</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
