import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Navbar.Brand>
          <NavLink className="navbar-brand" activeClassName="selected" to={"/"}>
            Merceecom
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to={"/catalogo"}
              >
                Productos
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to={"/about"}
              >
                Nosotros
              </NavLink>
            </Nav.Link>
            <NavDropdown
              title="Categorias"
              id="collasible-nav-dropdown"
              className="nav-link"
            >
              <NavDropdown.Item>
                <NavLink
                  className="dropdown-item"
                  activeClassName="selected"
                  to={"/category/drama"}
                >
                  Drama
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className="dropdown-item"
                  activeClassName="selected"
                  to={"/category/accion"}
                >
                  Accion
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className="dropdown-item"
                  activeClassName="selected"
                  to={"/category/aventura"}
                >
                  Aventura
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink
                  className="dropdown-item"
                  activeClassName="selected"
                  to={"/catalogo"}
                >
                  Catalogo
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Nav>
            <Nav.Link href="#">
              <CartWidget />
            </Nav.Link>
            <Nav.Link href="#deets">Contacto</Nav.Link>
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
