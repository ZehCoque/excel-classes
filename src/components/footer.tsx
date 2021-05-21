import React from 'react';
import Container from 'react-bootstrap/Container'

const Footer: React.FC = () => {
  return (
    <Container fluid className="bg-light p-0">
        <Container className="bg-light">
            This is a footer
        </Container>
    </Container>
  );
};

export default Footer;