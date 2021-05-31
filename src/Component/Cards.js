import React from "react";
import Card from "./Card";

import imagen1 from './../assets/images/imagen1.png';
import imagen2 from './../assets/images/imagen2.jpg';
import imagen3 from './../assets/images/imagen3.jpg';

const cards = [
  
  {
    id: 1,
    title: "MISIÓN",
    image: imagen1,
    url: "http://www.fca.uaemex.mx/fca/ideario/mision.html",
  },
  {
    id: 2,
    title: "DIRECTOR",
    image: imagen2,
    url: "http://www.fca.uaemex.mx/fca/direccion.html",
  },
  {
    id: 3,
    title: "VISIÓN",
    image: imagen3,
    url: "http://www.fca.uaemex.mx/fca/ideario/vision.html",
  },
];
<h1>facultad </h1> 

function Cards() {
  return (
    
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;