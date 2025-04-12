import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';


interface ContactProps {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  }
  
  const Contact = ({ phone, email, github, linkedin }: ContactProps) => {
    /* TODO: This could use some work*/
    return (
      <div >
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header><h3>Contact</h3></Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                  <p>Email: {email}</p>
                  <p>
                    GitHub: <a href={github}>{github}</a>
                  </p>
                  <p>
                    LinkedIn: <a href={linkedin}>{linkedin}</a>
                  </p>
                  <p>Website: </p>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item> 

          </Accordion>
      </div>
    );
  };
  
  export default Contact;