import React from "react";
import { Col, Row } from "react-bootstrap";
import node from "../../Assets/gifs/node.gif";
import mongo from "../../Assets/gifs/mongo.gif";
import git from "../../Assets/gifs/git.gif";
import selenium from "../../Assets/gifs/selenium.png";
import css from "../../Assets/gifs/css.gif";
import react from "../../Assets/gifs/react.gif";
import python from "../../Assets/gifs/python.gif";
import js from "../../Assets/gifs/js.gif";
import tensor from "../../Assets/gifs/tensor.gif";
import sql from "../../Assets/gifs/sql.gif";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={node} width="100px" alt="Node" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={mongo} width="120px" alt="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={git} width="150px" alt="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={selenium} width="90px" alt="Selenium" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={css} width="100px" alt="css" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sql} width="120px" alt="SQl" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={react} width="100px" alt="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={python} width="100px" alt="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={js} width="100px" alt="JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={tensor} width="100px" alt="Tensor" />
      </Col>
    </Row>
  );
}

export default Techstack;
