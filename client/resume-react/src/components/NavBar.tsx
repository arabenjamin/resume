import MyLogo from './MyLogo';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNavBar({handleViewState}){
    const handleClick = (view) => {
      handleViewState(view);
    };
    return(
        
        <Navbar expand="lg" className="fluid navbar-dark bg-dark" >
          <Container>
            <Navbar.Brand href="#home" className='navbar-dark bg-dark'>
              <MyLogo  />
                &nbsp; &nbsp;Ara Sheperdigian
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => handleClick('About')} >About</Nav.Link>
                <Nav.Link onClick={() => handleClick('Experience')} >Experience</Nav.Link>
                <Nav.Link onClick={() => handleClick('Skills')} >Skils</Nav.Link>
                <Nav.Link onClick={() => handleClick('Contact')} >Contact</Nav.Link>
              </Nav> 
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;
