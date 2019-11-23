import React from "react";
import Nav from "react-bootstrap/Nav";
import Link from "react-router-dom/Link";
const Footer = () => (
  <Nav className="justify-content-center" activeKey="/">
    <Nav.Item>
      <Nav.Link>
        <Link
          style={{ textDecoration: "none", color: "cornflowerblue" }}
          to="/"
        >
          Your Library
        </Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <Link
          style={{ textDecoration: "none", color: "cornflowerblue" }}
          to="/queue"
        >
          Queue
        </Link>
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Footer;
