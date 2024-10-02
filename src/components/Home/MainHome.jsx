import React from 'react';
import Inicio from './Inicio/Inicio';
import Servicios from './Servicios/Servicios'
import Acercade from './Acercade/Acercade';

const MainHome = () => {
  return (
    <div>
        <main>
            <div className="container-fluid">
                <Inicio />
                <Servicios />
                <Acercade />
                {/* 
                <section id="Contactenos" className="position-relative my-3">
                    <div className="d-none d-md-block position-absolute mx-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.3947207432!2d-74.27262552044822!3d4.648620643934393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1726791635596!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="position-relative"> <!--  my-5 m-md-5"> -->
                        <div className="container position-relative">
                            <div className="row">
                                <div className="col-md-6 col-xl-6 col-xxl-4 offset-md-6 offset-xl-7 offset-xxl-8">
                                    <div>
                                        <form id="formContact" className="border rounded shadow p-3 p-md-4 p-lg-5" method="post" style="background: var(--bs-body-bg);">
                                            <h3 className="text-center mb-3"><span style="color: var(--bs-secondary-color);">Contáctenos</span></h3>
                                            <div className="mb-3"><input className="form-control" type="text" id="nameContact" name="name" placeholder="Nombre Completo" required /></div>
                                            <div className="mb-3"><input className="form-control" type="email" id="emailContact" name="email" placeholder="Correo Electrónico" required /></div>
                                            <div className="mb-3"><textarea className="form-control" name="message" id="messageContact" placeholder="Mensaje" rows="6" required></textarea></div>
                                            <div className="mb-3"><button className="btn btn-primary" type="submit">Enviar</button></div>
                                            <!-- <div className="mb-3">
                                                <p className="text-center">¿Tienes alguna pregunta o necesitas asistencia? No dudes en contactarnos. Estamos aquí para ayudarte a encontrar la mejor solución tecnológica para ti. Puedes llamarnos al (123) 456-7890 o también puedes visitarnos en nuestra tienda física ubicada en Calle Tecnología 123, Ciudad Tech.</p>
                                            </div> -->
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

            {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                    <input className="form-control mb-3" type="email" name="email" id="email">
                                </div>
                                <div className="col-12">
                                    <label className="form-label" for="clave">Contraseña</label>
                                    <input className="form-control mb-3" type="password" name="clave" id="clave">
                                </div>     
                                <div className="col-auto mx-auto">
                                    <!-- <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button> -->
                                    <button type="button" className="btn btn-primary">Iniciar Sesión</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </main>
    </div>
  );
};

export default MainHome;
