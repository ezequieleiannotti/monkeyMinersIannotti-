import React from "react";

import logo from "../../assets/statics/logom.jpg";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import image from "../../assets/statics/CartWidget.png";

const Header = () => {
  return (
    <div>
      <>
        <br />
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Monkey Miners</Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />

            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Tienda">Tienda</Nav.Link>
              <Nav.Link href="#Contacto">Contacto</Nav.Link>
            </Nav>
          </Container>
          <CartWidget />
        </Navbar>
      </>
    </div>
  );
};

export default Header;
