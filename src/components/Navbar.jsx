import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "../assets/style/header.css"

export const Navbar = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">

        <Nav.Item className="color-nav">
          <Link to="/">Home</Link>
        </Nav.Item>

        <Nav.Item className="color-nav">
          <Link to="reto">Nuestro Reto</Link>
        </Nav.Item>

        <Nav.Item className="color-nav">
          <Link to="impacto">Impacto</Link>
        </Nav.Item>

        <Nav.Item className="color-nav">
          <Link to="inscribete">Inscribete</Link>
        </Nav.Item>

        <Nav.Item className="color-nav">
          <Link to="apoyenos">Apoyenos</Link>
        </Nav.Item> 

      </Nav>
    </>
  );
};
