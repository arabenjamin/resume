import MyLogo from './MyLogo';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




function MyFooter(){

    return(
        <Container className='shadow-lg' >
          <Row>
            <Col>
              <Navbar expand="lg" className=" navbar-dark bg-dark shadow-lg rounded border border-secondary-subtle">
                <Navbar.Brand href="#home" className='navbar-dark bg-dark'>
                  <MyLogo  />
                    &nbsp; &nbsp;Ara Sheperdigian
                </Navbar.Brand>
                <Nav></Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
    );
}

export default MyFooter;
