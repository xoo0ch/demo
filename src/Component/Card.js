import React from "react";
import PropTypes from "prop-types";

import "./card.css";



function Card({ imageSource, title, text, url }) {
  return (
    
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />

      </div>
      <h1 className="title">Facultad</h1>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "La Facultad de Contaduría y Administración, Organismo Académico de la Universidad Autónoma del Estado de México, asume el compromiso de formar profesionistas éticos con capacidad de generar, estudiar, preservar, transmitir, extender y aplicar el conocimiento con valores y responsabilidad social en el ámbito de la Administración, Contaduría, Informática Administrativa y Mercadotecnia"}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Ir a {title}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;