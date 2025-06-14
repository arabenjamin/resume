import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

import Widget from './MyWidget'; 


import { useState } from 'react';

import { FaNpm, FaHtml5, FaCss3, FaBootstrap, FaGithub, FaAws, 
  FaPython, FaNode, FaCode, FaGitAlt, FaReact, FaVuejs, 
  FaFlask, FaRust, FaLinux, FaDocker, FaYarn, FaGitlab  } from 'react-icons/fa';
import { SiJquery, SiInsomnia, SiVim, SiGnubash,SiJavascript,SiPostgresql, SiFastapi,SiGooglecloud, SiKubernetes, SiTypescript, SiCplusplus, SiDuckdb, SiMysql, SiSqlite, SiMongodb  } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { HiCommandLine } from "react-icons/hi2";





interface SkillsProps {
    skills: SkillSet;
}

interface SkillSet {
    [category: string]: Skill[];
    Frontend: Skill[];
    Backend: Skill[];
    Tools: Skill[];
}
interface Skill {
    name: string;
    proficiency: number;
}

const Icons = {

  "Python": FaPython, "Node":FaNode,
  "React": FaReact, "Vue": FaVuejs , "JavaScript": SiJavascript, "TypeScript": SiTypescript,
  "Bootstrap":FaBootstrap, "Django": DiDjango, "FastAPI": SiFastapi, "Flask": FaFlask,
  "Golang": FaGolang, "Cplus":SiCplusplus, "Rust":FaRust, "DuckDB": SiDuckdb, "MySQL": SiMysql,
  "SQLite3": SiSqlite, "PostgreSQL":SiPostgresql, "MongoDB": SiMongodb, "Linux": FaLinux, "Docker": FaDocker,
  "Kubernetes": SiKubernetes, "AWS":FaAws, "GoogleCloud": SiGooglecloud, "Bash": SiGnubash, "Git":FaGitAlt,
  "Github": FaGithub, "Vim": SiVim, "Insomnia":SiInsomnia, "VScode": VscVscode, "CSS3":FaCss3, "HTML5":FaHtml5,
  "jquery":SiJquery, "cli":HiCommandLine, "Npm":FaNpm, "Yarn":FaYarn, "GitLab":FaGitlab
}


const DynamicIcon = ({ name }: { name: keyof typeof Icons }) => {
  const IconComponent = Icons[name] || null; // Default to null if icon is not found
  return IconComponent ? <IconComponent style={{ marginRight: '8px' }} size="1em" /> : null;
};

const Skills = ({ skills }: SkillsProps) => {

  // set items as an empty list, and a method to add items to the list
  const [leaves, setLeaves] = useState(0);



  const handleClick = () => {

    setLeaves(leaves+1);
  };

  if (leaves > 6){
    // Start over
    setLeaves(0);
  }

  return (
    <>




        <Card className='skills'>

          <Card.Header className='text-center fs-2'>
            <HiCommandLine style={{ marginRight: '8px' }}/> 
              I am more than the sum of all my parts.
              <FaCode style={{ marginLeft: '8px' }} /> 
          </Card.Header>

          <Card.Title className='text-center'>
              Skills
          </Card.Title>

          <Card.Text className='text-center text-align-center'>
            My technical skill set is a blend of expertise across both frontend and backend development, 
            enabling me to build robust, scalable, and user-friendly applications. From crafting intuitive user 
            interfaces with modern frameworks like React and Vue to designing efficient backend systems with Python, 
            Golang, and Docker, I thrive on solving complex challenges. My experience spans database management, 
            cloud platforms, and containerization, ensuring seamless integration and deployment of applications. 
            I am always eager to learn new technologies and refine my skills to deliver impactful solutions."
          </Card.Text>

          <Card.Body >
            <Container>
              <Row >
                  <CardGroup    >
                      {Object.entries(skills).map(([category, skillList], index) => (
                        <Col>
                          <div key={index}>
                              <Card className='skills' border="secondary" >
                              
                                {/*<Card.Img variant="top" src="/NotRocket.png" />*/}

                                <Card.Body>

                                    <Card.Title>
                                      {category.replace("_", " ").toUpperCase()}
                                    </Card.Title>
                                    <Card.Text>
                                      {/* I need to put something thoughtfull here*/}
                                    </Card.Text>

                                </Card.Body>
                                <ListGroup className="list-group-flush scrollable-list-group-container skills">
                                  {skillList.map((skill, idx) => (
                                    <ListGroup.Item key={idx} className='skills'>
                                      <Row>
                                        <Col>
                                          <DynamicIcon  name={skill.name as keyof typeof Icons} />  {skill.name}
                                        </Col>
                                        <Col>
                                          
                                           <ProgressBar style={{ marginRight: '8px'}} label={`${skill.proficiency}%`} now={skill.proficiency} /> 
                                        </Col> 
                                      </Row>


                                    </ListGroup.Item>
                                  ))}
                                </ListGroup>
                              
                              </Card>
                          </div>
                        </Col>

                      ))}
                  </CardGroup>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer className='text-center'>
            Something for the bottom of the page
          </Card.Footer>
        </Card>   

        <Row>
          <Col md={{ span: 6, offset: 4 }} className='float-center'>
            {/* This is my self made custom widget */}
            <Button className="btn-primary" onClick={handleClick}>Click Me !</Button>
            <Widget width={200} leaves={leaves}  />
          </Col>
        </Row>
    </>


  );
};

export default Skills;