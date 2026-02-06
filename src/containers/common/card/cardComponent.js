import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ravimg from '../../../assets/images/ravi.png';
import "./card.scss";
const CardComponent = (props) => {
  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ravimg} />
        <Card.Body>
          <Card.Title>Head-Coach</Card.Title>
          <Card.Text>
           Ravi (Chinmaya Vidyalaya school - physical director) 
           <div>Contat : 9790656890</div>
            
            
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
