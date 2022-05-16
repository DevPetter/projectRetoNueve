import React from "react";

import { CardImgBody } from "../components/CardImgBody";
import { CardInfBoxBody } from "../components/CardInfBoxBody";
import { CardInfImgBody } from "../components/CardInfImgBody";

import "../assets/style/body.css";

export const BodyHome = () => {
  return (
    <>
      <div className="sectionBody">
        
        <h1>Reto nueve con imagenes</h1>

        <div className="card-info">
          <CardInfBoxBody />
          <CardInfImgBody/>
        </div>

        <CardImgBody />
      </div>
    </>
  );
};
