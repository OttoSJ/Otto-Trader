import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <>
      <Navbar expand="lg" className=" bg-dark navbar-dark p-3 ">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto"></Nav>
          <Nav className="mx-3">
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

// <Nav className=" bg-dark navbar-dark p-3 d-flex justify-content">
// <Nav.Item>
//   <Nav.Link href="/" className="navbar-brand">
//     Home
//   </Nav.Link>
// </Nav.Item>

// <Nav.Item>
//   <Nav.Link href="/registration" className="navbar-brand">
//     Registration
//   </Nav.Link>
// </Nav.Item>

// <Nav.Item>
//   <Nav.Link href="/login" className="navbar-brand">
//     Login
//   </Nav.Link>
// </Nav.Item>
// </Nav>
