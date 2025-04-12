import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

interface SkillsProps {
    skills: Record<string, string[]>;
}
  


const Skills = ({ skills }: SkillsProps) => {
  
  
  
  return (
    <Accordion >
      <Accordion.Item eventKey="0">
      <Accordion.Header><h3>Skills</h3></Accordion.Header>
        <Accordion.Body>
          <div className='skills'>
            <CardGroup>
              <Card>
              {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={index}>
                    <Card.Img variant="top" src="holder.js/100px160" />

                    <Card.Body>
                      <Card.Title>
                        <h3>{category.replace("_", " ").toUpperCase()}</h3>
                      </Card.Title>
                      <Card.Text>
                        <ul>
                          {skillList.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                          ))}
                        </ul>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </div>
              ))}
              </Card>
            </CardGroup>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
};

export default Skills;