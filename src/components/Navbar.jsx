import React from "react";
import { Nav } from "react-bootstrap";

export const Navbar = () => {
  return (
    <>
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
    </>
  );
};
