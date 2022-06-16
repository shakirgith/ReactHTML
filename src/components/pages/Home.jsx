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

        <div className="app1-header bg" style={{ backgroundImage: "url(assets/images/header-1-bg.png)" }}>
          <div id="homeBanner" className="main-banner wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <div class="container">
         
                  <div class="row">
                    <div class="col-lg-6 col-md-7">
                    <div class="align-self-center">
                      <div class="left-content show-up wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                       

                            <h6>Welcome to Agency</h6>
                            <h2>Get the Best ideas for your website</h2>
                            <p>
                              This template is brought to you by TemplateMo
                              website. Feel free to use this for a commercial
                              purpose. You are not allowed to redistribute the
                              template ZIP file on any other template website.
                              Thank you.
                            </p>
                          
                         
                        </div>
                      </div>
                    </div>
                   
                      <div class="rotate col-auto">
                        <div>
                          <img alt="" class="img-fluid" src="/assets/images/preview_movie.png" />
                        </div>
                      </div>
                      <div class="squares col">
                        <img alt="" class="img-fluid img-1 set-abs" src="/assets/images/Ellipse.png" />
                        <img alt="" class="img-fluid img-2 set-abs" src="/assets/images/Ellipse.png" />
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



     

      <div id="welcome" className="container-fluid py-5 feature">
        <div className="container">

           <div className="row align-items-cente mt-5">
              <div class="col-lg-12 text-center  wow fadeInDown mb-5" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="section-heading align-items-center">
                      <h6>Most Effective Creative</h6>
                      <h4>Service Provider For <em>All Plateform</em></h4>
                      <div class="line-dec"></div>
                    </div>
                    <p>
                    We hope this DigiMedia template is useful for your work. You can use this template for any purpose. You maycontribute a little amountvia PayPal tosupport TemplateMoin creating new templates regularly.
                    </p> 
              </div>
            
              
              <div className="featurebox mb-5">
              <div class="row g-5">
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="feature-item">
                  <div className="ficon">
                      <i class="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>UI & UX Design</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 col-12">
                <div class="feature-item">
                  <div className="ficon">
                      <i class="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>Graphics Design</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>


              <div class="col-lg-4 col-sm-6 col-12">
                <div class="feature-item">
                  <div className="ficon">
                      <i class="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>UI Development</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>


              <div class="col-lg-4 col-sm-6 col-12">
                <div class="feature-item">
                  <div className="ficon">
                      <i class="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>eCommerce Solutions</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 col-12">
                <div class="feature-item">
                  <div className="ficon">
                      <i class="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>Digital Marketing</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>


              <div class="col-lg-4 col-sm-6 col-12">
                <div class="feature-item">
                  <div className="ficon">
                      <i class="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>Support & Service</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>

              </div>


              </div>
          </div> 
         



        </div>
      </div>
      {/* Work Process

RESEARCH
Identify client requirement and review scope of work


PLAN
Sketching makes everything and work faster


DESIGN
A design concept is the idea behind a design


DEVELOP
Coding, processing implementation


LAUNCH
Testing, quality check, approvals */}

{/* <div class="project-complate" style={{backgroundImage: "url(assets/images/quick-sol.png)"}}> */}
<div class="project-complate">
<div class="container">
            <div class="row">
               
                <div class="col-lg-6 d-flex aos-init aos-animate" data-aos="">
                  <div className="offers-container">
                        <div class="section-heading">
                          <h6>Work Process</h6>
                          <h4>
                          Advance <em>Features</em>
                          </h4>
                          <div class="line-dec"></div>
                        </div>
                        {/* <p>
                          We hope this DigiMedia template is useful for your work.
                          You can use this template for any purpose. You may
                        </p> */}


                        <ul>
                          <li>
                              <h5>Beautiful Interface Layout</h5>
                              <p> We hope this DigiMedia template is useful for your work.
                          You can use this template for any purpose. You may</p>
                          </li>

                          <li>
                              <h5>Beautiful Interface Layout</h5>
                              <p> We hope this DigiMedia template is useful for your work.
                          You can use this template for any purpose. You may</p>
                          </li>

                          <li>
                              <h5>Beautiful Interface Layout</h5>
                              <p> We hope this DigiMedia template is useful for your work.
                          You can use this template for any purpose. You may</p>
                          </li>

                          <li>
                              <h5>Beautiful Interface Layout</h5>
                              <p> We hope this DigiMedia template is useful for your work.
                          You can use this template for any purpose. You may</p>
                          </li>

                        </ul>

                    </div>

                    
                </div> 

                <div class="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="fade-right">
                    <img class="img-fluid" src="assets/images/img.png" alt="work" />        
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

      <div class="counters" style={{ backgroundImage: "url(assets/images/quote-bg-v3.jpg)" }}>
        <div class="container">
              <div class="section-heading  wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                  <h6>Success</h6>
                  <h4>Happy Journey</h4>
                  <div class="line-dec"></div>
              </div>
          <div class="row">
            <div class="col-lg-12">
                        


                  
              <div class="counter-list">
                        <ul>
                          <li>
                              <div class="counter-text">
                                <i class="fa fa-heartbeat feature-icon"></i>
                                <h2 class="counts">306</h2>
                                <h5 class="text-center">Years of Experience</h5>
                            </div>
                          </li>
                          <li>
                            <div class="counter-text">
                                <i class="fa fa-heartbeat feature-icon"></i>
                                <h2 class="counts">306</h2>
                                <h5 class="text-center">Project Finished</h5>
                            </div>
                          </li>
                          
                          <li>
                            <div class="counter-text">
                                <i class="fa fa-heartbeat feature-icon"></i>
                                <h2 class="counts">306</h2>
                                <h5 class="text-center">Happy Clients</h5>
                            </div>
                          </li>
                          <li>
                            <div class="counter-text">
                                <i class="fa fa-heartbeat feature-icon"></i>
                                <h2 class="counts">306</h2>
                                <h5 class="text-center">Team of Experts</h5>
                            </div>
                          </li>
                        </ul>
                    

                </div>




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

      {/* <div id="blog" class="blog">
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
      </div> */}

     
    </>
  );
}

export default Home;
