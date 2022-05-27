import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "../assets/style/header.css"

export const Navbar = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
      
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      <Nav.Link as={Link} to="/"  className="color-nav">Home</Nav.Link>
      <Nav.Link as={Link} to="reto"  className="color-nav">Nuestro Reto</Nav.Link>
      <Nav.Link as={Link} to="impacto"  className="color-nav">Impacto</Nav.Link>
      <Nav.Link as={Link} to="inscribete"  className="color-nav">Inscribete</Nav.Link>
      <Nav.Link as={Link} to="apoyenos"  className="color-nav">Apoyenos</Nav.Link>

      </Nav>
    </>
  );
};
