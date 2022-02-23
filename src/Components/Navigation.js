import React, { useState, handleClick } from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
import pdf from "./JDiesResume2.22PDF.pdf";

const Navigation = () => {
  
 

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
              
                <a href={pdf} target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "rgba(255,255,255,.55)", paddingRight: "0.5rem", paddingLeft: "0.5rem", paddingTop: "0.5rem"}}>Resume</a>
              
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
