import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// import { Modal, Button } from "react-bootstrap";

function Header() {
  //   console.log("hello");
  const [isActive, setIsActive] = useState(false);


  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);

  };





  return (
    <>
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8 col-7">
              <ul className="info">
                <li>
                  <a  href="mailto:digimedia@company.com">
                    <i class="fa fa-envelope"></i> digimedia@company.com
                  </a>
                </li>
                <li>
                  <a href="callto:010-020-0340">
                    <i class="fa fa-phone"></i> 010-020-0340
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-4 col-12">
              <ul className="social-media"> 
                 <li>
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-dribbble"></i>
                  </a>
                </li>
               
                <li>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img className="img-fluid" src={"assets/images/logo-v1.png"} alt="Logo" />
                </Link> 
               
              
                <ul className={`nav mobile-menu ${isActive ? 'active' : ''}`}>
                  <li>
                    <NavLink activeClassName="active" to="/">  
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active"  to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active"   to="/aboutus">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active"  to="/contactus">
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <div className="border-first-button">
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Free Quote</button>
                    

                    </div>
                  </li>

                 
                </ul>
                <button className={`menu-trigger ${isActive ? 'active' : ''}`} onClick={handleClick}>
                  <span>Menu</span>
                </button>

               
              </nav>
            </div>
          </div>
        </div>
      </header>


    </>
  );
}

export default Header;
