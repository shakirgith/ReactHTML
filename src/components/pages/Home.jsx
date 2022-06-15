import React from "react";
import { Link } from "react-router-dom";
// import 'jquery/dist/jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { Carousel }  from 'react-bootstrap/Carousel';
// import CarouselCaption from 'react-bootstrap/CarouselCaption';
// import CarouselItem from 'react-bootstrap//CarouselItem';

function Home() {
  return (
    <>
      <div>
        {/* <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="img-fluid w-100"
                src={"assets/images/carousel-1.jpg"}
                alt="carousel Slider"
              />
              <div className="carousel-caption d-flex align-items-center justify-content-center">
                <div
                  className="p-5"
                  style={{ width: "100%", maxWidth: "100%" }}
                >
                  <h5 className="text-white text-uppercase mb-md-3">
                    Creative Agency
                  </h5>
                  <h1 className="display-3 text-white mb-md-4">
                    Creative Services For Brands Grow
                  </h1>
                 
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid w-100"
                src={"assets/images/carousel-1.jpg"}
                alt="carousel Slider"
              />
              <div className="carousel-caption d-flex align-items-center justify-content-center" />
              <div className="p-5" style={{ width: "100%", maxWidth: "100%" }}>
                <h5 className="text-white text-uppercase mb-md-3">
                  Creative Agency 2
                </h5>
                <h1 className="display-3 text-white mb-md-4">
                  Highly Professional Team Members
                </h1>
              
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid w-100"
              src={"assets/images/carousel-1.jpg"}
              alt="carousel Slider"
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="p-5" style={{ width: "100%", maxWidth: "100%" }}>
                <h5 className="text-white text-uppercase mb-md-3">
                  Creative Agency 3
                </h5>
                <h1 className="display-3 text-white mb-md-4">
                  Happy Clients and Positive Reviews
                </h1>
               
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="app1-header bg"
          style={{ backgroundImage: "url(assets/images/header-1-bg.png)" }}
        >
          <div
            id="homeBanner"
            className="main-banner wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-lg-6 align-self-center">
                      <div
                        class="left-content show-up header-text wow fadeInLeft"
                        data-wow-duration="1s"
                        data-wow-delay="1s"
                      >
                        <div class="row">
                          <div class="col-lg-12">
                            <h6>Digital Media Agency</h6>
                            <h2>We Boost Your Website Traffic</h2>
                            <p>
                              This template is brought to you by TemplateMo
                              website. Feel free to use this for a commercial
                              purpose. You are not allowed to redistribute the
                              template ZIP file on any other template website.
                              Thank you.
                            </p>
                          </div>
                          <div class="col-lg-12">
                            <div class="border-first-button scroll-to-section">
                              <a href="#contact">Free Quote</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      {/* <div
                        class="right-image wow fadeInRight"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                      >
                        <img src="assets/images/slider-dec.png" alt="" />
                      </div> */}

                      <div class="rotate col-auto">
                        <div>
                          <img
                            alt=""
                            class="img-fluid"
                            src="/assets/images/preview_movie.png"
                          />
                        </div>
                      </div>
                      <div class="squares col">
                        <img
                          alt=""
                          class="img-fluid img-1 set-abs"
                          src="/assets/images/Ellipse.png"
                        />
                        <img
                          alt=""
                          class="img-fluid img-2 set-abs"
                          src="/assets/images/Ellipse.png"
                        />
                      </div>
                      <div class="animation-circle-inverse col-auto">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center pb-1">
            <div className="col-lg-5">
              <img
                className="img-thumbnail p-3"
                src={"assets/images/about.jpg"}
                alt="About"
              />
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                Who We Are
              </small>
              <h1 className="mt-2 mb-4">
                Most Effective Creative Service Provider For Companies
              </h1>
              <p className="mb-4">
                Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor
                vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea
                sit dolor duo elitr dolor amet, justo est ipsum amet dolor ut
                ipsum. Labore diam et nonumy amet dolores. Volup sit labore
                dolores erat, magna justo sed lorem kasd ea dolor. Labore sit
                clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum.
              </p>
              {/* <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Read More</Link> */}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div
                className="d-flex align-items-center border mb-4 mb-lg-0 p-4"
                style={{ height: "120px" }}
              >
                <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Our Office</h5>
                  <p className="m-0">123 Street, New York, USA</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="d-flex align-items-center border mb-4 mb-lg-0 p-4"
                style={{ height: "120px" }}
              >
                <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Email Us</h5>
                  <p className="m-0">info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="d-flex align-items-center border mb-4 mb-lg-0 p-4"
                style={{ height: "120px" }}
              >
                <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Call Us</h5>
                  <p className="m-0">+012 345 6789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div id="about" class="about section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div
                    class="about-left-image  wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src="assets/images/about-dec.png" alt="" />
                  </div>
                </div>
                <div
                  class="col-lg-6 align-self-center  wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div class="about-right-content">
                    <div class="section-heading">
                      <h6>About Us</h6>
                      <h4>
                        Who is DigiMedia <em>Agency</em>
                      </h4>
                      <div class="line-dec"></div>
                    </div>
                    <p>
                      We hope this DigiMedia template is useful for your work.
                      You can use this template for any purpose. You may
                      <Link to="/" rel="nofollow" target="_blank">
                        contribute a little amount
                      </Link>
                      via PayPal to
                      <Link to="/" target="_blank">
                        support TemplateMo
                      </Link>
                      in creating new templates regularly.
                    </p>
                    <div class="row">
                      <div class="col-lg-4 col-sm-4">
                        <div
                          class="skill-item first-skill-item wow fadeIn"
                          data-wow-duration="1s"
                          data-wow-delay="0s"
                        >
                          <div class="progress" data-percentage="90">
                            <span class="progress-left">
                              <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                              <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">
                              <div>
                                90%
                                <br />
                                <span>Coding</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4">
                        <div
                          class="skill-item second-skill-item wow fadeIn"
                          data-wow-duration="1s"
                          data-wow-delay="0s"
                        >
                          <div class="progress" data-percentage="80">
                            <span class="progress-left">
                              <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                              <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">
                              <div>
                                80%
                                <br />
                                <span>Photoshop</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4">
                        <div
                          class="skill-item third-skill-item wow fadeIn"
                          data-wow-duration="1s"
                          data-wow-delay="0s"
                        >
                          <div class="progress" data-percentage="80">
                            <span class="progress-left">
                              <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                              <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">
                              <div>
                                80%
                                <br />
                                <span>Animation</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" class="services section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h6>Our Services</h6>
                <h4>
                  What Our Agency <em>Provides</em>
                </h4>
                <div class="line-dec"></div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="naccs">
                <div class="grid">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="menu">
                        <div class="first-thumb active">
                          <div class="thumb">
                            <span class="icon">
                              <img
                                src="assets/images/service-icon-01.png"
                                alt=""
                              />
                            </span>
                            Apartments
                          </div>
                        </div>
                        <div>
                          <div class="thumb">
                            <span class="icon">
                              <img
                                src="assets/images/service-icon-02.png"
                                alt=""
                              />
                            </span>
                            Food &amp; Life
                          </div>
                        </div>
                        <div>
                          <div class="thumb">
                            <span class="icon">
                              <img
                                src="assets/images/service-icon-03.png"
                                alt=""
                              />
                            </span>
                            Cars
                          </div>
                        </div>
                        <div>
                          <div class="thumb">
                            <span class="icon">
                              <img
                                src="assets/images/service-icon-04.png"
                                alt=""
                              />
                            </span>
                            Shopping
                          </div>
                        </div>
                        <div class="last-thumb">
                          <div class="thumb">
                            <span class="icon">
                              <img
                                src="assets/images/service-icon-01.png"
                                alt=""
                              />
                            </span>
                            Traveling
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <ul class="nacc">
                        <li class="active">
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>SEO Analysis &amp; Daily Reports</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div class="ticks-list">
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img
                                      src="assets/images/services-image.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>Healthy Food &amp; Life</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div class="ticks-list">
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img
                                      src="assets/images/services-image-02.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>Car Re-search &amp; Transport</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div class="ticks-list">
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img
                                      src="assets/images/services-image-03.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>Online Shopping &amp; Tracking ID</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div class="ticks-list">
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img
                                      src="assets/images/services-image-04.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>Enjoy &amp; Travel</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div class="ticks-list">
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i class="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i class="fa fa-check"></i> Optimized
                                        Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img
                                      src="assets/images/services-image.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="free-quote" class="free-quote" style={{ backgroundImage: "url(assets/images/quote-bg.jpg)" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 offset-lg-4">
              <div
                class="section-heading  wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h6>Get Your Free Quote</h6>
                <h4>Grow With Us Now</h4>
                <div class="line-dec"></div>
              </div>
            </div>
            <div
              class="col-lg-8 offset-lg-2  wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <form id="search" action="#" method="GET">
                <div class="row">
                  <div class="col-lg-4 col-sm-4">
                    <fieldset>
                      <input
                        type="web"
                        name="web"
                        class="website"
                        placeholder="Your website URL..."
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        class="email"
                        placeholder="Email Address..."
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <fieldset>
                      <button type="submit" class="main-button">
                        Get Quote Now
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" class="our-portfolio section">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div
                class="section-heading wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h6>Our Portofolio</h6>
                <h4>
                  See Our Recent <em>Projects</em>
                </h4>
                <div class="line-dec"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="container-fluid wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.7s"
        >
          <div class="row">
            <div class="col-lg-12">
            <OwlCarousel className='owl-theme' loop margin={10} nav>
              {/* <div class="loop owl-carousel"> */}
                <div class="item">
                  <Link to="/">
                    <div class="portfolio-item">
                      <div class="thumb">
                        <img src="assets/images/portfolio-01.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Website Builder</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="item">
                  <Link to="/">
                    <div class="portfolio-item">
                      <div class="thumb">
                        <img src="assets/images/portfolio-01.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Website Builder</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="item">
                  <Link to="/">
                    <div class="portfolio-item">
                      <div class="thumb">
                        <img src="assets/images/portfolio-02.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Website Builder</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="item">
                  <Link to="/">
                    <div class="portfolio-item">
                      <div class="thumb">
                        <img src="assets/images/portfolio-03.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Website Builder</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="item">
                  <Link to="/">
                    <div class="portfolio-item">
                      <div class="thumb">
                        <img src="assets/images/portfolio-04.jpg" alt="" />
                      </div>
                      <div class="down-content">
                        <h4>Website Builder</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                </OwlCarousel>

        
            </div>
          </div>
        </div>
      </div>

      <div id="blog" class="blog">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-4 offset-lg-4  wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div class="section-heading">
                <h6>Recent News</h6>
                <h4>
                  Check Our Blog <em>Posts</em>
                </h4>
                <div class="line-dec"></div>
              </div>
            </div>
            <div
              class="col-lg-6 show-up wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div class="blog-post">
                <div class="thumb">
                  <Link to="/">
                    <img src="assets/images/blog-post-01.jpg" alt="" />
                  </Link>
                </div>
                <div class="down-content">
                  <span class="category">SEO Analysis</span>
                  <span class="date">03 August 2021</span>
                  <Link to="/">
                    <h4>
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adelore Eiusmod
                      Tempor Incididunt
                    </h4>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    doers itii eiumod deis tempor incididunt ut labore.
                  </p>
                  <span class="author">
                    <img src="assets/images/author-post.jpg" alt="" />
                    By: Andrea Mentuzi
                  </span>
                  <div class="border-first-button">
                    <Link to="/">Discover More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div class="blog-posts">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="post-item">
                      <div class="thumb">
                        <Link to="/">
                          <img src="assets/images/blog-post-02.jpg" alt="" />
                        </Link>
                      </div>
                      <div class="right-content">
                        <span class="category">SEO Analysis</span>
                        <span class="date">24 September 2021</span>
                        <Link to="/">
                          <h4>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h4>
                        </Link>
                        <p>
                          Lorem ipsum dolor sit amet, cocteturi adipiscing
                          eliterski.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="post-item">
                      <div class="thumb">
                        <Link to="/">
                          <img src="assets/images/blog-post-03.jpg" alt="" />
                        </Link>
                      </div>
                      <div class="right-content">
                        <span class="category">SEO Analysis</span>
                        <span class="date">24 September 2021</span>
                        <Link to="/">
                          <h4>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h4>
                        </Link>
                        <p>
                          Lorem ipsum dolor sit amet, cocteturi adipiscing
                          eliterski.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="post-item last-post-item">
                      <div class="thumb">
                        <Link to="/">
                          <img src="assets/images/blog-post-04.jpg" alt="" />
                        </Link>
                      </div>
                      <div class="right-content">
                        <span class="category">SEO Analysis</span>
                        <span class="date">24 September 2021</span>
                        <Link to="/">
                          <h4>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h4>
                        </Link>
                        <p>
                          Lorem ipsum dolor sit amet, cocteturi adipiscing
                          eliterski.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default Home;
