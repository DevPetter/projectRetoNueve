/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import images from "../assets/img/images.js";
import "../assets/style/body.css";

export const CardInfImgBody = () => {
  return (
    
      <div className="card-inf-ImgBody">
        <img src={images.imgIntegrantes} className="img-cardInfo"/>
      </div>
    
  );
};
