import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import SellerDashboard from "./components/SellerDashboard";
import CarRegistration from "./components/CarRegistration";
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sellerdashboard" element={<SellerDashboard />} />
          <Route path="/carregistration" element={<CarRegistration />} />
          <Route path="/cardetails" element={<CarDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
