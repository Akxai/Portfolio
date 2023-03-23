import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../Assets/akshay.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Row className="myAvtar">
            <Tilt>
              <img src={profile} className="img-fluid profile" alt="avatar" />
            </Tilt>
          </Row>
          <Row md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LEMME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a{" "}
              <i>
                <b className="purple">Full Stack Developer</b>
              </i>
              {"  "}
              with a strong proficiency in{" "}
              <i>
                <b className="purple">Javascript</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Python</b>
              </i>
              , I bring a comprehensive skillset to every project I work on.
              With a deep understanding of both front-end and back-end
              development, I'm able to create robust and dynamic applications
              that meet the needs of clients and users alike. From designing
              elegant interfaces to building efficient databases, I'm committed
              to delivering top-quality solutions that drive success.
            </p>
            <p className="home-about-body">
              In addition, I endeavor to utilize my fervor for product
              development by leveraging{" "}
              <i>
                <b className="purple">Node.js</b>
              </i>{" "}
              and cutting-edge Javascript libraries and frameworks such as{" "}
              <i>
                <b className="purple">React.js</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Next.js</b>
              </i>{" "}
              whenever appropriate and feasible.
            </p>
          </Row>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>YOU MAY LOCATE ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Akxai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/akxai_092"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akshay-aileni-938991224"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/akxai_092"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          {/* <h4>I am always just a click away</h4>
          <a href="mailto:akshayaileni@gmail.com" className="info-mail">
            info@AkshayAileni.com
          </a> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
