import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div id="free-quote" class="free-quote" style={{ backgroundImage: "url(assets/images/subscribe.png)" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section-heading  wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                <h6>Get Your Info</h6>
                <h4>Subscribe To Our <em>Newsletter</em></h4>
                <div class="line-dec"></div>
                <p className="mt-5">Receive updates, news and deals</p>
              </div>
            </div>
            <div class="col-lg-8 offset-lg-2  wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <form id="search" action="#" method="GET">
                <div class="row">
                  <div class="col-lg-4 col-sm-4">
                    <fieldset>
                      <input type="fname" name="fname" class="website" placeholder="Enter your full name" autocomplete="on" required />
                    </fieldset>
                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <fieldset> 
                      <input type="email"name="email" class="email" placeholder="Enter your email Id" autocomplete="on" required />
                    </fieldset>
                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <fieldset>  
                      <button type="submit" class="main-button">
                        SUBSCRIBE
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>




            </div>
            <ul className="footer-social-media">
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

      <footer style={{ backgroundImage: "url(assets/images/quote-bg-v3.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 2022 DemoExample., Ltd. All Rights Reserved.
              </p>
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
            <div className="modal -header">
              <h5 className="modal-title">
                GET YOUR FREE QUOTE <br />
                Grow With Us Now
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="contact" action="" method="post">
                {/* <div class="col-lg-12">
                    <div class="contact-dec">
                      <img src="assets/images/contact-dec.png" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-5">
                    <img src="assets/images/about.jpg" alt="" />
                   
                  </div> */}

                <div class="fill-form">
                  <div class="row">
                    <div class="col-lg-12">
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
                    <div class="col-lg-6">
                      <fieldset>
                        <textarea
                          name="message"
                          type="text"
                          class="form-control"
                          id="message"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          class="main-button"
                        >
                          Send Message Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
