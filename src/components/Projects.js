import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import alchemist_img from "../assets/img/alchemist.jpg";
import friends_img from "../assets/img/friends_book.jpg";
import rules_img from "../assets/img/rules_book.jpg";
import atomic_img from "../assets/img/atomic_book.jpg";
import hurt_img from "../assets/img/hurt_book.jpg";
import richest_img from "../assets/img/richest_book.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      description: "The Alchemist",
      imgUrl: alchemist_img,
    },
    {
      description: "How to Win Friends and Influence People",
      imgUrl: friends_img,
    },
    {
      description: "12 Rules for Life",
      imgUrl: rules_img,
    },
    {
      description: "Atomic Habits",
      imgUrl: atomic_img,
    },
    {
      description: "Can't Hurt Me",
      imgUrl: hurt_img,
    },
    {
      description: "The Richest Man in Babylon",
      imgUrl: richest_img,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Books</h2>
                <p>Books that have stuck with me:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
