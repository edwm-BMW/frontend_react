import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="d-flex justify-content-center mt-4 ">
      <Card style={{ width: "65%", height:"50%", boxShadow: "0 4px 8px rgba(0,0,0,0.2)"}}>
        <Card.Body >
          <Card.Title class="text-uppercase fw-bold display1"><h1>bienvenus sur le site</h1></Card.Title>
          <Card.Text class="text-uppercase">
           venez voir notre selection d'hotels.
          </Card.Text>
         <Link to={"/hotels"}> <Button variant="primary">clicker ici</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeCard;
