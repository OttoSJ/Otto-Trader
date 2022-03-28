import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset(navigate("/")));
  };

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
          {!user ? (
            <Nav>
              <Nav.Link href="/registration" className="navbar-brand">
                Registration
              </Nav.Link>
            </Nav>
          ) : null}
          {!user ? (
            <Nav>
              <Nav.Link href="/login" className="navbar-brand">
                Login
              </Nav.Link>
            </Nav>
          ) : null}
          {user ? (
            <Nav>
              <Nav.Link href="/sellerdashboard" className="navbar-brand">
                Seller's Dashboard
              </Nav.Link>
            </Nav>
          ) : null}
          {user ? (
            <Nav>
              <Nav.Link href="/carregistration" className="navbar-brand">
                Register New Vehicle
              </Nav.Link>
            </Nav>
          ) : null}
          {user ? (
            <Nav>
              <Nav.Link onClick={onLogout} className="navbar-brand">
                Logout
              </Nav.Link>
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
