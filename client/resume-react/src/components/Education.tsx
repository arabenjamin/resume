import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Education(){


    return (        
    <Card className="mb-2">
        <Card.Header className='text-center fs-1'>
            Education
        </Card.Header>
        <Container>
            <Row>

            
                <Col>
                    <Card.Img  variant='top' className='img_container' src='/SelfPhoto-landscape-sm.png'></Card.Img>
                </Col>
                
                <Col >
                    
                    <Card.Title className='text-center fs-1'>
                        School of Hardknocks and Elbow Greese

                    </Card.Title>
                    
                    <Card.Body className='text-center'>
                        <Card.Text>
                            I am a self taught Software enginner. I did not go to school for computer science, or math. 
                        </Card.Text>
                        <Card.Text>

                            I studied Pyschology, Philosophy and Theater in community college, although I did not graduate. 
                        </Card.Text>
                    </Card.Body>
    
                </Col>
            </Row>
        </Container>
        <Card.Footer className='text-center'>
            When frusturation exceeds ambition, the quality of the product falls below the standard.

        </Card.Footer>
    </Card>)


}

export default Education;