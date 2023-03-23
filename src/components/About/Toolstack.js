import React from "react";
import { Col, Row } from "react-bootstrap";
import linux from "../../Assets/gifs/linux.gif";
import code from "../../Assets/gifs/code.gif";
import postman from "../../Assets/gifs/postman.gif";
import heroku from "../../Assets/gifs/heroku2.png";
import github from "../../Assets/gifs/github.gif";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={linux} width="100px" alt="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={code} width="100px" alt="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} width="150px" alt="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={github} width="100px" alt="Github" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={heroku} width="100px" alt="Heroku" />
      </Col>
    </Row>
  );
}

export default Toolstack;
