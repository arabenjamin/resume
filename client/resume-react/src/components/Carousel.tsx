import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselImage from './CarouselImage';


function MyCarousel() {

    return (
        <Carousel className='fluid carousel'>
            
            <Carousel.Item className="justify-content">
                <Container >
                    <Row >
                        <Col className="intro">
                            <CarouselImage />
                            <Carousel.Caption >
                                <h3 className="intro">Hi !</h3>

                                <p className="intro">
                                    My name is Ara and your job description caught my eye and 
                                    I thought it would be worth it to reach out. I have about a decade of experience 
                                    building, testing and deploying web apps, micro-services, API endpoints, 
                                    and other cloud systems using Docker, Python, Go, both SQL and NoSQL. 
                                </p>
                                <p className="intro">
                                    I'm not really a front-end developer. But I do have experience writing in Javascript/TypeScript, 
                                    and I am pretty familiar with Node. I’ve used React, Vue and jquery a fair amount in the past. 
                                </p>                 
                                <p className="intro">
                                    Given my experience, I think I might be a good fit for you. I'm wondering if you might be a good fit for me. I would be delighted to hear back. Thank you for your time.
                                </p>
                                    
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col className="intro" >
                            <CarouselImage />
                            <Carousel.Caption>
                                <h3 className="intro" >Setting Expectations</h3>
                                <p className="intro" >When frustration exceeds ambition, the quality of the output falls below the the expected standard</p>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;
