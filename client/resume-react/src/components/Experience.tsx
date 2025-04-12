import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';


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
    return (

      
      <Accordion >
        <Accordion.Item eventKey="0">
        <Accordion.Header><h3>Experience</h3></Accordion.Header>
          <Accordion.Body>
            <Accordion defaultActiveKey="0">
              {experience.map((job, index) => (
                
                <div key={index}>
                  <Accordion.Item eventKey={String(index)}>
                    <Accordion.Header>
                      
                      <h6>
                        {job.company} ({job.location})
                      </h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <strong>{job.title}</strong> - {job.dates}
                      </p>
                      <p>{job.summary}</p>
                      <ul>
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              ))}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        

    );
  };
  
  export default Experience;