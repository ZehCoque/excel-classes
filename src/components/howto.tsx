import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const HowTo: React.FC = () => {
  return (
    <Container fluid className="bg-light p-0">
        <Container fluid="md" className="bg-primary">
            <Row>
              <Col className="p-0" sm>
                <Image 
                src="img/woman-sitting-in-front-of-laptop-jpeg.jpeg" 
                fluid 
                alt="Consultoria"/>   
              </Col>
              <Col sm className="p-0 bg-primary text-light m-0">
                <div className="d-flex align-items-center justify-content-start h-100">
                  <Jumbotron className="bg-transparent p-3 text-left">
                    <h1>Elimine tarefas repetitivas</h1>
                    <hr className="right"></hr>
                    <p>
                      Preencher relatórios pode se tornar tão simples quanto apertar um botão!
                    </p>
                  </Jumbotron>
                </div>
              </Col>
            </Row>

            <Row>
            <Col className="p-0" sm={{ order: 'last' }}>
                <Image
                src="img/automation-button.jpg" 
                fluid 
                alt="Consultoria"/>   
              </Col>
              <Col sm={{ order: 'first' }} 
              className="p-0 bg-primary text-light m-0">
                <div className="d-flex align-items-center justify-content-end h-100">
                <Jumbotron className="bg-transparent p-3 text-right">
                  <h1>Automatize o seu trabalho</h1>
                  <hr className="left"></hr>
                  <p>
                    Deixe sua máquina fazer o trabalho por você!
                  </p>
                </Jumbotron>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="p-0" sm>
                <Image 
                src="img/sap_excel.jpg" 
                fluid 
                alt="Consultoria"/>   
              </Col>
              <Col sm className="p-0 bg-primary text-light m-0">
                <div className="d-flex align-items-center justify-content-start h-100">
                  <Jumbotron className="bg-transparent p-3 text-left">
                    <h1>Integração entre SAP e VBA</h1>
                    <hr className="right"></hr>
                    <p>
                      Complete tarefas e extraia relatórios de várias transações automaticamente!
                    </p>
                  </Jumbotron>
                </div>
              </Col>
            </Row>
        </Container>

    </Container>
  );
};

export default HowTo;