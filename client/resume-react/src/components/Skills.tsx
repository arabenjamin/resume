import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Image from 'react-bootstrap/Image';
import { FaAws, FaPython, FaNode, FaReact, FaVuejs, FaFlask, FaRust, FaLinux, FaDocker  } from 'react-icons/fa';
import { SiGnubash,SiJavascript,SiPostgresql, SiFastapi,SiGooglecloud, SiKubernetes, SiTypescript, SiCplusplus, SiDuckdb, SiMysql, SiSqlite, SiMongodb  } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";

interface SkillsProps {
    skills: Record<string, string[]>;
}

const Icons = {

  Python: FaPython,
  Node:FaNode,
  React: FaReact,
  Vue: FaVuejs ,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Django: DiDjango,
  FastAPI: SiFastapi,
  Flask: FaFlask,
  Golang: FaGolang,
  Cplus:SiCplusplus,
  Rust:FaRust,
  DuckDB: SiDuckdb,
  MySQL: SiMysql,
  SQLite3: SiSqlite,
  PostgreSQL:SiPostgresql,
  MongoDB: SiMongodb,
  Linux: FaLinux,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  AWS:FaAws,
  GoogleCloud: SiGooglecloud,
  Bash: SiGnubash
}


const DynamicIcon = ({ name }) => {
  const IconComponent = Icons[name] || null; // Default to null if icon is not found
  return IconComponent ? <IconComponent size="2em" /> : null;
};

const Skills = ({ skills }: SkillsProps) => {
  

  
  return (
    <>


        <Card >

          <Card.Header>
            Skills
          </Card.Header>
          <Card.Title className='text-center'>
            The list below is not an exhuastive list, but should give you an idea of the work I do best.
          </Card.Title>
          <Card.Body >
            <Container>
              <Row >
                  <CardGroup    >
                      {Object.entries(skills).map(([category, skillList], index) => (
                        <Col>
                          <div key={index}>
                              <Card border="secondary" >
                              
                                {/*<Card.Img variant="top" src="/NotRocket.png" />*/}

                                <Card.Body>

                                    <Card.Title>
                                      {category.replace("_", " ").toUpperCase()}
                                    </Card.Title>
                                    <Card.Text>
                                      {/* I need to put something thoughtfull here*/}
                                    </Card.Text>

                                </Card.Body>
                                <ListGroup className="list-group-flush scrollable-list-group-container ">
                                  {skillList.map((skill, idx) => (
                                    <ListGroup.Item key={idx}>
                                      <Col>
                                      <DynamicIcon  name={skill.name} /> {skill.name} 
                                      <ProgressBar  now={60} />
                                      </Col> 

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
          <Card.Footer>
            Something for the Bottom of the page
          </Card.Footer>
        </Card>   
    </>


  );
};

export default Skills;