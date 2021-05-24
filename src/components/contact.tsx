import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Contact: React.FC = () => {
  return (
    <Container fluid className="bg-dark p-0" id="contact">
        <Container className="bg-dark">
            <Jumbotron className="bg-transparent text-white text-center m-0" >
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary" size="lg">Entre em contato conosco!</Button>
                </p>
            </Jumbotron>
        </Container>
    </Container>
  );
};

export default Contact;