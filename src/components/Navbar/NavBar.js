import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import {CartWidget} from "../CartWidget/CartWidget"
export const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="danger"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          Merceecom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">
              Productos
            </Nav.Link>
            <Nav.Link href="#pricing">
              Nosotros
            </Nav.Link>
            <NavDropdown
              title="Categorias"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                categoria1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              categoria2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              categoria3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Todas las categorias
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="#">
              <CartWidget />
            </Nav.Link>
            <Nav.Link href="#deets">
              Contacto
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;