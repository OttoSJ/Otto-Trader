import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <>
      <Navbar expand="lg" className=" bg-dark navbar-dark p-3 ">
        <Navbar.Toggle className="mr-auto" />
        <Navbar.Collapse>
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/" className="navbar-brand">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/registration" className="navbar-brand">
              Registration
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className="navbar-brand">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
