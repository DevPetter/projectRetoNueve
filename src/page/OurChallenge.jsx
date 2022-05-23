/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import images from "../assets/img/images";
import "../assets/style/ourReto.css"

export const OurChallenge = () => {
  return (
    <div className="our-reto-style">
      <h1>Nuestro reto</h1>
      <img src={images.imgParamoBelmira} className="img-fondo"/>
    </div>
  );
};
