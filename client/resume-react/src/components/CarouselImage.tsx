import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

type Props = {
    img: string;
}

function CarouselImage(props: Props){

    return (
        <Row>
            <Col >
                <Image src={props.img} fluid rounded/>
            </Col>
        </Row>
        
    );
};

export default CarouselImage;