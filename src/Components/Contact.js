import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Contact = () => (
    <div>
     <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav >
            <Nav.Link href="#foo">foo</Nav.Link>
            <Nav.Link href="#bar">bar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    </div>
  );
  
  export default Contact;