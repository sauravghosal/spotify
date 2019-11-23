import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "react-router-dom/Link";

const Header = () => (
  <Navbar className="justify-content-center" bg="dark" variant="dark">
    <Navbar.Brand>
      <Nav.Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Home
        </Link>
      </Nav.Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/queue">
            Queue
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/explore"
          >
            Explore
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
