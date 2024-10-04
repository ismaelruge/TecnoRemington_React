/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Tmadre from '../../../assets/productos/motherboard.jpg'
import FPoder from '../../../assets/productos/Fuente_Poder.jpg'
import TGrafica from '../../../assets/productos/Tarjeta_Grafica.jpg'

const Products = () => {

    const btnCompras = (product) => {
        alert(`haz comprado el articulo ${product}`);
    };

    return (
        <section id="Servicios" className="my-3">
            <h2 className="text-center text-body-secondary">Servicios</h2>
            <p className="text-center">Ofrecemos servicios personalizados que van más allá de la simple venta de productos. Nuestros expertos te asesoran en la compra, instalación y configuración de tus dispositivos. Además, contamos con servicio técnico especializado para reparaciones, actualizaciones y mantenimiento de equipos.</p>
            <div className="row product-list">
                <div className="col-sm-6 col-md-4 product-item">
                    <div className="product-container">
                        <div className="row">
                            <div className="col-md-12"><a className="product-image" href="#"><img src={Tmadre} alt='Tarjeta Madre' /></a></div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <h2><a href="#">Mother Board</a></h2>
                            </div>
                        </div>
                        <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="#">82 opiniones</a></div>
                        <div className="row">
                            <div className="col-12">
                                <p className="product-description">Tarjeta madre marca gigabyte</p>
                                <div className="row">
                                    <div className="col-6"><button className="btn btn-primary" type="button" onClick={() => btnCompras('Tarjeta madre marca gigabyte')} >Compra Ahora!</button></div>
                                    <div className="col-6">
                                        <p className="product-price">$800.000 COP </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 product-item">
                    <div className="product-container">
                        <div className="row">
                            <div className="col-md-12"><a className="product-image" href="#"><img src={FPoder} alt='Fuente de poder' /></a></div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <h2><a href="#">Fuente de poder</a></h2>
                            </div>
                        </div>
                        <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="#">150 opiniones</a></div>
                        <div className="row">
                            <div className="col-12">
                                <p className="product-description">Fuente de poder generica marca PowerGroup</p>
                                <div className="row">
                                    <div className="col-6"><button className="btn btn-primary" type="button" onClick={() => btnCompras('Fuente de poder generica marca PowerGroup')} >Compra Ahora!</button></div>
                                    <div className="col-6">
                                        <p className="product-price">$120.000 COP </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 product-item">
                    <div className="product-container">
                        <div className="row">
                            <div className="col-md-12"><a className="product-image" href="#"><img src={TGrafica} alt='Tarjeta Gráfica' /></a></div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <h2><a href="#">Tarjeta Gráfica</a></h2>
                            </div>
                        </div>
                        <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="#">703 opiniones</a></div>
                        <div className="row">
                            <div className="col-12">
                                <p className="product-description">Tarjeta gráfica marca Gigabyte</p>
                                <div className="row">
                                    <div className="col-6"><button className="btn btn-primary" type="button" onClick={() => btnCompras('Tarjeta gráfica marca Gigabyte')} >Compra Ahora!</button></div>
                                    <div className="col-6">
                                        <p className="product-price">$1'300.000 COP </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
