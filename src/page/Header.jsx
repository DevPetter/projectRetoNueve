/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navegation } from "./Navegation";

import images from "../assets/img/images.js";
import "../assets/style/header.css";

export const Header = () => {
  return (
    <>
      <div className="header">
        <img src={images.imgLogo} />

        <div className="circle"></div>
        <Navegation />
        <div className="square"></div>
      </div>
    </>
  );
};
