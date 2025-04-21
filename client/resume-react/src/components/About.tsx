import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function About() {

    return (
        
        <Card className="mb-2">
            <Card.Header className='text-center fs-1'>
                About Me
            </Card.Header>
            <Container>
                <Row>

                
                    <Col>
                        <Card.Img  variant='top' className='img_container' src='/SelfPhoto-landscape-sm.png'></Card.Img>
                    </Col>
                    
                    <Col >
                        
                        <Card.Title className='text-center fs-1'>
                            Ara Sheperdigian
                        </Card.Title>
                        <Card.Subtitle className='text-center fs-4'>
                            Software Engineer
                        </Card.Subtitle>
                        
                        <Card.Body className='text-center'>

                            <Card.Text>
                                I am a passionate and versatile software engineer with over a decade of 
                                experience in designing, building, and deploying full-stack web applications. 
                                My expertise spans backend development with Python, Go, and Docker, 
                                as well as database management using both SQL and NoSQL solutions. 
                                While backend development is my forte, I have also worked extensively with 
                                frontend technologies like JavaScript, TypeScript, React, and Vue to create 
                                intuitive and responsive user interfaces. I thrive on solving complex problems, 
                                learning new technologies, and delivering scalable, high-quality solutions that 
                                make an impact.

                            </Card.Text>
                        </Card.Body>
        
                    </Col>
                </Row>
            </Container>
            <Card.Footer className='text-center'>
                When frusturation exceeds ambition, the quality of the product falls below the standard.

            </Card.Footer>
        </Card>
    );
};

export default About;
