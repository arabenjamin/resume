import Container from 'react-bootstrap/Container';


import Image from 'react-bootstrap/Image';


function CarouselImage(){
    return (
        <Image style={{ objectFit: "cover" }} className="d-block w-100 " src="/RocketPortalGunProtonPack.jpeg" fluid roundedCircle />
    );
};

export default CarouselImage;