import React from 'react';

const Products = () => {
    const products = [
        {
            name: 'Mother Board',
            description: 'Tarjeta madre marca gigabyte',
            price: '$800.000 COP',
            imgSrc: require('../../assets/productos/motherboard.jpg'),
            reviews: '82 opiniones',
        },
        {
            name: 'Fuente de poder',
            description: 'Fuente de poder generica marca PowerGroup',
            price: '$120.000 COP',
            imgSrc: require('../../assets/productos/Fuente_Poder.jpg'),
            reviews: '150 opiniones',
        },
        {
            name: 'Tarjeta Gráfica',
            description: 'Tarjeta gráfica marca Gigabyte',
            price: '$1\'300.000 COP',
            imgSrc: require('../../assets/productos/Tarjeta_Grafica.jpg'),
            reviews: '703 opiniones',
        },
    ];

    const btnCompras = (product) => {
        alert(`haz comprado el articulo ${product}`);
    };

    return (
        <section id="Servicios" className="my-3">
            <h2 className="text-center text-body-secondary">Servicios</h2>
            <p className="text-center">
                Ofrecemos servicios personalizados que van más allá de la simple venta de productos.
            </p>
            <div className="row product-list">
                {products.map((product, index) => (
                    <div key={index} className="col-sm-6 col-md-4 product-item">
                        <div className="product-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <a className="product-image" href="#">
                                        <img src={product.imgSrc} alt={product.name} />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <h2><a href="#">{product.name}</a></h2>
                                </div>
                            </div>
                            <div className="product-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half"></i>
                                <a className="small-text" href="#">{product.reviews}</a>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="product-description">{product.description}</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <button className="btn btn-primary" type="button" onClick={() => btnCompras(product.name)}>
                                                Compra Ahora!
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <p className="product-price">{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
