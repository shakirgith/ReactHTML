import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";





function Footer() {


  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState("");



  const SubscribeForm = useRef();
  console.log("SubscribeForm");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gsreinfot",
        "template_hbtfvem",
        SubscribeForm.current,
        "dH_n_8Bg8DG2TZwkK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setValues({
            name: "",
            email: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          // console.log(error.text);
          console.log("FAILED...", error);
        }
      );
  };

  function handleInput(e) {
    console.log(e);
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <>



      <div
        id="free-quote"
        className="free-quote"
        style={{ backgroundImage: "url(assets/images/subscribe.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading  wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h6>Get Your Info</h6>
                <h4>
                  Subscribe To Our <em>Newsletter</em>
                </h4>
                <div className="line-dec"></div>
                <p className="mt-5">Receive updates, news and deals</p>
              </div>
            </div>
            <div
              className="col-lg-8 offset-lg-2  wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <form id="search" ref={SubscribeForm} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-4 col-sm-4">
                    <input type="text" value={values.name} name="name" onChange={handleInput} className="website" placeholder="Enter your name" autocomplete="on" required />
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <input type="email" name="email" pattern="[^ @]*@[^ @]*" value={values.email} onChange={handleInput} className="email"  placeholder="Enter your email" autocomplete="on" required="" />
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <button type="submit" className="main-button">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </form>
              {status && renderAlert()}
            </div>
          </div>
        </div>
      </div>

      <footer style={{ backgroundImage: "url(assets/images/quote-bg-v3.jpg)" }}>
        <div className="container text-white px-sm-3 px-md-5">
          <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
              <Link to="/" className="navbar-brand">
                {/* <h1 className="m-0 mt-n2 text-white display-4"><span className="text-primary">D</span>ot<span className="text-primary">C</span>om</h1> */}
                <img
                  className="img-fluid"
                  style={{ maxWidth: "160px", height: "auto" }}
                  src={"assets/images/logo-v1.png"}
                  alt="Logo"
                />
              </Link>
              {/* <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p> */}
              <ul className="list-unstyled mt-4">
                <li>
                  <i className="fa fa-map-marker mr-2"></i> 123 Street, New
                  York, USA
                </li>
                <li>
                  <i className="fa fa-phone mr-2"></i> +012 345 67890
                </li>
                <li>
                  <i className="fa fa-envelope mr-2"></i> info@example.com
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="font-weight-bold mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start footer-link">
                <Link to="/" className="text-white mb-2">
                  <i className="fa fa-angle-right mr-2"></i>Home
                </Link>
                <Link to="/aboutus" className="text-white mb-2">
                  <i className="fa fa-angle-right mr-2"></i>About Us
                </Link>
                <Link to="/services" className="text-white mb-2">
                  <i className="fa fa-angle-right mr-2"></i>Services
                </Link>
                <Link to="/contactus" className="text-white">
                  <i className="fa fa-angle-right mr-2"></i>Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="font-weight-bold mb-4">Popular Links</h5>
              <div className="d-flex flex-column justify-content-start footer-link">
                <Link to="/blog" className="text-white mb-2">
                  <i className="fa fa-angle-right mr-2"></i>Blog
                </Link>
                <Link to="/privacy" className="text-white mb-2">
                  <i className="fa fa-angle-right mr-2"></i>Privacy Policy
                </Link>
                <Link to="/termsandconditions" className="text-white mb-2">
                  <i className="fa fa-angle-right mr-2"></i>Terms and Conditions
                </Link>
                <Link to="/sitemap" className="text-white">
                  <i className="fa fa-angle-right mr-2"></i>Sitemap
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="font-weight-bold mb-4">Follow Us</h5>
              <p>
                Dolor clita stet nonumy clita diam vero, et et ipsum diam labore
              </p>
              <ul className="footer-social-media">
                <li>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-gradient2 px-sm-3 px-md-5">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>Copyright © 2022 DemoExample., Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                GET YOUR FREE QUOTE <br />
                Grow With Us Now
              </h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              
            </div>  
            <div className="modal-body">
              <form >
                {/* <div className="col-lg-12">
                    <div className="contact-dec">
                      <img src="assets/images/contact-dec.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img src="assets/images/about.jpg" alt="" />
                   
                  </div> */}

                <div id="contact" className="fill-form overflow-hidden">
                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Name"
                          autocomplete="on"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email"
                          required=""
                        />
                      </fieldset>
                      <fieldset>
                        <input
                          type="subject"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          autocomplete="on"
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          type="text"
                          className="form-control"
                          id="message"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                        >
                          Send Message Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

const renderAlert = () => (
  <div className="success-msg">
    <p>Thanks for Subscribed</p>
  </div>
);

export default Footer;
