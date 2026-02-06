import React from "react";
import "./login.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginHeaderComponent = () => {
    const [isLoggedIn, setLoginFlag] = React.useState(false)
  return (
    <>
      <div className="login-header-container">
        <div className="">
          <b><center>NMS SPORTS CLUB MUHAVOOR</center></b>
        </div>
        <div className="nav-links">
        
          <span className="link">
            <Link to="/home">Home</Link>
          </span>
          <span className="link">
            <Link to="/about_us">About_us</Link>
          </span>

          {/* <span className="link">
            <Link to="/authed/source">Contact</Link>
          </span> */}

          {
            <span className="login-link">
            <Link to="/login">Login</Link>
          </span>
          }

        
      </div>
      </div>
     
      
    </>
  );
};

export default LoginHeaderComponent;
