import React from "react";
import { Col } from "react-bootstrap";

const ToppingOption = ({ name, imagePath }) => {
  return (
    <div>
      <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
        <img
          style={{ width: "75%" }}
          src={`http://localhost:3030/toppings/${imagePath}`}
          alt={`${name} topping`}
        />
      </Col>
    </div>
  );
};

export default ToppingOption;
