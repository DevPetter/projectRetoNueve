import React from "react";
import { Card } from "react-bootstrap";
import "../assets/style/footer.css";

export const CardContacts = () => {
  return (
    <>
      <Card className="boxContactenos">
        <Card.Body>
          <Card.Title>Contáctanos</Card.Title>
          <Card.Text>
            <Card.Subtitle>PHONE: +45 30 22 82 20 </Card.Subtitle>
            <Card.Subtitle>EMAIL: kaja@kajaskytte.dk </Card.Subtitle>
            <Card.Subtitle>CVR: 36353481</Card.Subtitle>
            
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
