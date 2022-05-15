import React from "react";
import { Nav } from "react-bootstrap";
import "../style/header.css"

export const Navegation = () => {
  return (
    <>
    <div id="nav">

      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#" className="color-nav">
            Nuestro reto
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="color-nav">
            Impacto
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="color-nav">
            Inscribete
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    </>
  );
};
