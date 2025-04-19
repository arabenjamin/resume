import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

import Image from 'react-bootstrap/esm/Image';

import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

import { IoIosBusiness } from "react-icons/io";
import { FaPersonRunning } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';


interface Job {
    company: string;
    location: string;
    summary: string;
    title: string;
    dates: string;
    responsibilities: string[];
  }
  
  interface ExperienceProps {
    experience: Job[];


  }
  
  const Experience = ({ experience }: ExperienceProps) => {
    
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClose = () => {
      setShow(false);
      setSelectedItem(null);
    }
    const handleShow = (item: Job) => {
      setSelectedItem(item);
      setShow(true);
    
    }

    return (
      <>
        
        <Card >
          <Card.Header >
             
              
                
                <Col className='text-center fs-1'>
                 Experience
                </Col>
                
              
            
            </Card.Header>
          
          <Container>

            <Row>
              <Col className='image-container'> 
                <Card.Img variant='top' className='img_container' src='/SelfPhoto-landscape-sm.png'></Card.Img>
              </Col>
            </Row>
            
            
            <Row>
              <Col>
                <Card.Title className='text-center'>
                  Rich and diverse background working for small, medium, and large employers.
                </Card.Title>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <Card.Text className='text-center'>
                  I am a fullstack engineer with a decade of experience building, testing and deploying both frontend and backend services, 
                  micro-services, API endpoints, and other cloud systems using Docker, Python, Go, both SQL and NoSQL. 
                  I'm not really a front-end developer. But I do have experience writing in  Javascript/TypeScript, 
                  and I am pretty familiar with Node. I’ve used React, Vue and jquery a fair amount in the past.                  
                </Card.Text>              
              </Col>
            </Row>

            <Row>
              <Col>
                <Card.Body>
                  <Accordion >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header >
                        
                          <FaHistory size="1.5em"/>
                          <Col  className=" w-auto p-3">
                            <h5>Employment History</h5>
                          </Col>
                          <Col className="justify-content-end w-auto p-3" >
                            <Badge bg="primary" pill className='float-end'>  
                                {experience.length}
                            </Badge>
                          </Col>            
                      </Accordion.Header>
                      <Accordion.Body className="scrollable-list-group-container flex">
                        <Row>
                          <Col>
                            <ListGroup  className='border rounded'>
                              {experience.map((job, index) => (
                                        
                                <div key={index}>

                                  <ListGroup.Item action eventKey={String(index)} onClick={() => handleShow(job)}>
                                      <h5>
                                        <IoIosBusiness />
                                        {job.company} ({job.location})
                                        
                                      </h5>
                                
                                      <strong>{job.title}</strong> - {job.dates}
                    
                                      
                                  </ListGroup.Item>
                                  <Modal size="lg" key={index} show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                    <Modal.Header closeButton>
                                      <Modal.Title>
                                        <IoIosBusiness />
                                        {selectedItem?.company} ({selectedItem?.location})
                                        
                                      </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    

                                      <FaPersonRunning />
                                        
                                      <strong>{selectedItem?.title}</strong> - {selectedItem?.dates}
                                      <br />
                                      {selectedItem?.summary}
                                      <ul>
                                        {selectedItem?.responsibilities.map((responsibility, idx) => (
                                          <li key={idx}>{responsibility}</li>
                                        ))}
                                      </ul>
                                    </Modal.Body>
                                  </Modal>
                                </div>
                              ))} 
                                  

                            </ListGroup>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item >
                  </Accordion>

                </Card.Body>
              </Col>
            </Row>


          </Container>  

           <Card.Footer className='float-center'>
              <Button>Download My Full Resume</Button>
           </Card.Footer>     
        </Card>
      </>
    );
  };
  
  export default Experience;