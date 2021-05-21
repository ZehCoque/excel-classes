import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const MyNavbar: React.FC = () => {
  return (
<Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">
  <Image width={120} src="img/White letters - green brackground.png" fluid alt="Consultoria"/> 
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about">Sobre</Nav.Link>
      <Nav.Link href="#features">Vantagens</Nav.Link>
      <Nav.Link href="#contact">Contato</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link>

        <Button variant="primary" className="py-0 px-3 d-inline-flex">
          <div className="row">
          <Image width={30} src="img/whatsapp.svg" className="mr-1 pb-1" alt="Consultoria"/> 
          <h5 className="align-self-center">
          Mande uma mensagem
            </h5>
          </div>
        </Button>

      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
};

export default MyNavbar;