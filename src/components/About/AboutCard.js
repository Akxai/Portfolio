import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshay Aileni </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />I am an Under Graduate Student pursuing B.E.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineRight /> Eating Pizzas
            </li>
            <li className="about-activity">
              <AiOutlineRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
