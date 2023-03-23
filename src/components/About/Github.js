import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days of <strong className="purple">code-a-liciousness</strong>
      </h1>
      <GitHubCalendar
        username="Akxai"
        blockSize={15}
        blockMargin={5}
        color="#0ce8f0"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
