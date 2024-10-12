import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Row className="pt-3 px-1 justify-content-center">
            <div className="tech_stack">
              <h3>Core Tech</h3>
              <i className="devicon-javascript-plain plain" style={{ fontSize: '50px' }}></i>
              <i className="devicon-php-plain pla" style={{ fontSize: '50px' }}></i> 
              <i className="devicon-nodejs-plain plain" style={{ fontSize: '50px' }}></i> 
              <i className="devicon-express-original plain" style={{ fontSize: '50px' }}></i> {/* Express icon */}
              <i className="devicon-react-original plain" style={{ fontSize: '50px' }}></i> 
              <i className="devicon-laravel-plain plain" style={{ fontSize: '50px' }}></i> 
              <i className="devicon-docker-plain plain" style={{ fontSize: '50px' }}></i> 
              <i className="devicon-git-plain plain" style={{ fontSize: '50px' }}></i> 
            </div>
              {/* <SkillsTab skills={hardSkills} isScrolled={isScrolled} /> */}
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
