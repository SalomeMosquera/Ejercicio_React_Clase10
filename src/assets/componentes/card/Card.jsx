import React from "react";
import "./Card.css";

const Card = ({ lang, url, scolor, fcolor }) => {
  return (
    <div
      className="container"
      style={{
        background: `linear-gradient(to left ${fcolor}, ${scolor})`,
      }}
    >
      <img src={img} alt="Imagenes" />
      <h2>{lang}</h2>
      <h3>Este es mi primer componente</h3>
    </div>
  );
};

export default Card;
