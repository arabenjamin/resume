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
                            Hi !

                        </Card.Title>
                        
                        <Card.Body className='text-center'>
                            <Card.Text className='fs-3'>
                                I'm Ara
                            </Card.Text>
                            <Card.Text>
                            I am a Fullstack Dev with a decade of experience building, testing and deploying web apps both frontend and backend, 
                            micro-services, API endpoints, and other cloud systems using Docker, Python, Go, both SQL and NoSQL. 
                            I'm not really a front-end developer. But I do have experience writing in  Javascript/TypeScript, 
                            and I am pretty familiar with Node. I've used React, Vue and jquery a fair amount in the past.
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
