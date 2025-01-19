import React, { useState } from 'react';
import './condominio.css';

const Condominio = () => {
    const images = [
        "/src/imagenes/condominios/condominio1.jpg",
        "/src/imagenes/condominios/condominio2.jpg",
        "/src/imagenes/condominios/condominio3.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="condominio-container">
            <h1 className="condominio-title">Inmuebles</h1>
            <div className="condominio-carrusel">
                <button className="condominio-button condominio-button-prev" onClick={prevSlide}>
                    &#8249;
                </button>
                <div className="condominio-carrusel-slide">
                    <img src={images[currentIndex]} alt={`Condominio ${currentIndex + 1}`} />
                </div>
                <button className="condominio-button condominio-button-next" onClick={nextSlide}>
                    &#8250;
                </button>
            </div>
            <div className="condominio-description-box">
                <img
                    src="/src/imagenes/condominios/condominio1.jpg"
                    alt="Condominio Descripción"
                    className="condominio-description-image"
                />
                <div className="condominio-description-text">
                    <h2>Condominio de Lujo</h2>
                    <p>
                        Este espectacular condominio ofrece vistas impresionantes, con todas las
                        comodidades modernas. Perfecto para familias y profesionales que buscan
                        comodidad y estilo en una ubicación privilegiada.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Condominio;
