import React, { useState, handleClick } from "react";
import { Nav, Navbar, Container, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Navbar collapseOnSelect expand="sm" variant="dark" className="position-absolute top-0 end-0 navbar">
         <Navbar.Toggle style={{paddingLeft: "20%"}}/>
         <Navbar.Collapse className="">
            <Nav className="me-auto nav hover-zoom">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                  About
              </Nav.Link>
              <Nav.Link as={Link} to="/skills">
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>

  );
};

export default Navigation;
