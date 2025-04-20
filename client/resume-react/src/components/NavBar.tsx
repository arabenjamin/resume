import MyLogo from './MyLogo';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNavBar({handleViewState}){
    const handleClick = (view) => {
      handleViewState(view);
    };
    return(
        <Container className='shadow-lg' >
          <Row>
            <Col>
              <Navbar expand="lg" className=" navbar-dark bg-dark shadow-lg rounded border border-secondary-subtle">
                <Navbar.Brand href="#home" className='navbar-dark bg-dark'>
                  <MyLogo  />
                    &nbsp; &nbsp;Ara Sheperdigian
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
                  <Nav className="justify-content-end">
                    <Nav.Item>
                      <Nav.Link onClick={() => handleClick('About')} >About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => handleClick('Experience')} >Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => handleClick('Skills')} >Skils</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => handleClick('Education')} >Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => handleClick('Contact')} >Contact</Nav.Link>
                    </Nav.Item>

                  </Nav> 
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
    );
}

export default MyNavBar;
