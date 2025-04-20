import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
interface SummaryProps {
    summary: string;
  }
  
  const Summary = ({ summary }: SummaryProps) => {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2>Summary</h2>
              <p>{summary}</p>
            </Col>
          </Row>

        </Container>

      </div>
    );
  };
  
  export default Summary;