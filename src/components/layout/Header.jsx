import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";

function Header() {
  //   console.log("hello");

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  return (
    <>
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8 col-7">
              <ul className="info">
                <li>
                  <Link to="mailto:digimedia@company.com" target="_blank">
                    <i class="fa fa-envelope"></i> digimedia@company.com
                  </Link>
                </li>
                <li>
                  <Link to="callto:010-020-0340">
                    <i class="fa fa-phone"></i> 010-020-0340
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-4 col-5">
              <ul className="social-media">
                {/* <li>
                  <Link to="https://facebook.com/">
                    <i class="fab fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://behance.com/">
                    <i class="fab fa-behance"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/">
                    <i class="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://dribbble.com/">
                    <i class="fab fa-dribbble"></i>
                  </Link>
                </li> */}
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

                <ul className="nav">
                  <li>
                    <Link activeClassName="active" to="/">  
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName="active" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName="active" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName="active" to="/contactus">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <div className="border-first-button">
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Free Quote</button>
                    

                    </div>
                  </li>
                </ul>
               <button className="menu-trigger">
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
