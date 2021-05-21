import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Footer: React.FC = () => {
  return (
    <Container fluid className="bg-secondary p-0">
        <Container className="bg-secondary">
            This is a footer
        </Container>
    </Container>
  );
};

export default Footer;