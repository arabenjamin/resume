import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/esm/Image';
import { FaGithub } from "react-icons/fa";
import{ MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import MyLogo from './MyLogo';

interface ContactProps {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  }
  
  const Contact = ({ phone, email, github, linkedin }: ContactProps) => {
    /* TODO: This could use some work*/
    return (

      <Card>

        <Card.Body className='text-center'>
          <Card.Title><IoMdContact /> Contact Me</Card.Title>
          <Card.Text>
            <Row>
              <Col>
                  <p>Please feel free to reach out if you feel like I might be a good fit for your team.</p>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
        <ListGroup>
          <ListGroup.Item><p><strong><MdEmail /></strong> {email}</p></ListGroup.Item>
          <ListGroup.Item> <p> <strong><FaGithub /></strong> <a href={github}>{github}</a></p></ListGroup.Item>
          <ListGroup.Item><p><strong><FaLinkedin /></strong> <a href={linkedin}>{linkedin}</a></p></ListGroup.Item>
          <ListGroup.Item><p><MyLogo  /> <a href="https://arabenjamin.github.io/resume">https://arabenjamin.github.io/resume</a></p></ListGroup.Item>
        </ListGroup>
        <Card.Footer className='text-center'>
          I'm always available for a chat.
        </Card.Footer>
      </Card>

    );
  };
  
  export default Contact;