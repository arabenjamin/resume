import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';


import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

import { IoIosBusiness } from "react-icons/io";
import { FaPersonRunning } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";


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
    

    const [open, setDownloadModal] = useState(false);
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


    const handleCloseDownloadModal = () => {
      setDownloadModal(false);
    }

    const handleDownloadOpen  = () => {
      setDownloadModal(true);
    }

    return (
      <>
        
        <Card >
          <Card.Header className='text-center fs-1'>
            Experience
          </Card.Header>
          
          <Container>
              
            <Row>
              <Col>
                <Card.Title className='text-center'>
                  Rich and diverse background working for small, medium, and large employers.
                </Card.Title>
                <Card.Text className='text-center'>
                  With a rich and diverse background, I have had the privilege of working with small startups, 
                  medium-sized businesses, and large enterprises. My professional journey has allowed me to 
                  contribute to innovative projects, solve complex technical challenges, and collaborate with 
                  cross-functional teams. From building scalable backend systems and designing cloud-based solutions 
                  to creating intuitive user interfaces, my experience spans a wide range of industries and 
                  technologies. I am passionate about leveraging my skills to deliver impactful solutions and 
                  drive success for the organizations I work with.
            
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
                  <Card.Body>
                    <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                          <GoProjectSymlink size="1.5em"/>
                          <Col  className=" w-auto p-3">
                            <h5>Projects</h5>
                          </Col>
                          <Col className="justify-content-end w-auto p-3" >
                            <Badge bg="primary" pill className='float-end'>  
                                {4}
                            </Badge>
                          </Col>
                      </Accordion.Header>
                      <Accordion.Body>
                        Projects Coming Soon.
                      </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                  </Card.Body>
                </Col>
              </Row>
          </Container>  

          <Card.Footer className='float-center'>
            <Row>
              <Col md={{ span: 6, offset: 5 }}>
                <Button onClick={handleDownloadOpen}>Download My Full Resume</Button>
              </Col>
            </Row>
            
            <Modal size="lg"  show={open} onHide={handleCloseDownloadModal} aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className='justify-center'>
                   Coming Soon 
                   <FaPersonRunning style={{marginLeft:'8px'}}/>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body >
                I'm still working on the backend. You will bable to download my resume soon.

                If you're looking for my resume in DOCX or PDF, please refer to my contact page. 

              </Modal.Body>
              <Modal.Footer  className='justify-center'>
                Thank you !
              </Modal.Footer>
            </Modal>
          </Card.Footer>     
        </Card>

      </>
  )};
  
  export default Experience;