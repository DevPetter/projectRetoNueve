import React from "react";
import { Navegation } from "./Navegation";
import "../style/header.css";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="circle"></div>
        <Navegation/>
        <div className="square"></div>
      </div>

    </>
  );
};
