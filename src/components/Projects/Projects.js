import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import notes from "../../Assets/Projects/Notes.png";
import debug from "../../Assets/Projects/Debug.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My latest{" "}
          <strong className="purple">Professional Accomplishments </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes"
              description="My notes and PDFs application, developed using EJS and Node.js, includes a database built on MongoDB that houses all of the important notes and PDFs that I have accumulated throughout my college education. With this application, I am able to easily access and organize these documents, enabling me to optimize my study and research efforts."
              ghLink="https://github.com/Akxai/finalNotes"
              demoLink="https://ece-092.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={debug}
              isBlog={false}
              title="Debug"
              description="Debug is a sample website that I have designed using pure HTML and CSS. It serves as an example of a product website and showcases my proficiency in web development and design. It demonstrates my expertise in creating visually appealing and functional websites. The website's clean design and intuitive user interface make it an effective tool for showcasing products or services online."
              ghLink="https://github.com/Akxai/Product"
              demoLink="https://akxai.github.io/Product/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
