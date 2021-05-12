import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

const MyCarousel: React.FC = () => {
  return (
    <Container fluid className="p-0">
        <Carousel>
        <Carousel.Item  className="vh-100">
            <Image src="spreadsheets-blue.jpg" fluid alt="Consultoria" className="vw-100"/>   
            <Carousel.Caption>
                <div className="d-flex justify-content-center">
                    <div className="caption">
                    <h1>Consultoria</h1>
                        <p>
                            Entregamos planilhas que resolvem o seu problema e aumentam a sua produtividade
                        </p>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className="vh-100">
        <Image src="excel-notebook-camera.png" fluid alt="Consultoria" className="vw-100" />
            <Carousel.Caption>
                <div className="d-flex justify-content-center">
                    <div className="caption">
                    <h1>Aulas Online de Excel e VBA</h1>
                        <p>
                            Aprenda a automatizar o seu trabalho e melhore a qualidade das suas entregas
                        </p>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </Container>
  );
};

export default MyCarousel;