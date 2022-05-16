import React from "react";

import { CardImgBody } from "../components/CardImgBody";
import { CardTextBody } from "../components/CardTextBody";

import "../assets/style/body.css";

export const BodyHome = () => {
  return (
    <>
      <div className="sectionBody">
        <h1>Reto nueve con imagenes</h1>
        <div className="card-info">
          <CardTextBody />
        </div>
        <CardImgBody />
      </div>
    </>
  );
};
