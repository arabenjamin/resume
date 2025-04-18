import { SetStateAction, useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyNavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';


interface Resume {
  name: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };
  summary: string;
  experience: {
    company: string;
    location: string;
    title: string;
    dates: string;
    summary: string;
    responsibilities: string[];
  }[];
  skills: Record<string, string[]>;
}

function App() {
  const [currentView, setCurrentView] = useState('About');
  const [resume, setResume, ] = useState<Resume | null>(null);

  useEffect(() => {
    // Fetch the resume.json file
    fetch('/resume.json')
      .then((response) => response.json())
      .then((data) => setResume(data))
      .catch((error) => console.error('Error fetching resume:', error));
  }, []);

  if (!resume) {
    return <div>Loading...</div>;
  }

  const handleButtonClick = (view: SetStateAction<string>) => {
    setCurrentView(view);
  };

  return (
  
      <>
        {/* Header TODO: needs readjusting */}

        <MyNavBar handleViewState={handleButtonClick} />
   
        <br/>
        <Container>
          <Row>
            <Col data-bs-theme="dark">
              {/* Set view based on active tab */}
              {currentView === 'Experience' && <Experience experience={resume.experience} />}
              {currentView === 'Skills' && <Skills skills={resume.skills} />}
              {currentView === 'Projects' && <About />} {/* TODO: This needs content */}
              {currentView === 'More' && <About />} {/* TODO: This needs content */}
              {currentView === 'About' && <About />} 
              {currentView === 'Contact' && <Contact {...resume.contact}/>}
            </Col>
          </Row>

        </Container>
      </>
  )
}



export default App
