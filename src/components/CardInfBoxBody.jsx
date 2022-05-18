/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Card } from "react-bootstrap";

import "../assets/style/body.css";

export const CardInfBoxBody = () => {
  return (
    <>
      <Card className="card-inf-txtBody">
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
            es simplemente el texto de relleno de las imprentas y archivos de
            texto. Lorem Ipsum ha sido el texto de relleno estándar de las
            industrias desde el año 1500, cuando un impresor (N. del T. persona
            que se dedica a la imprenta) desconocido usó una galería de textos y
            los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años.
           
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
