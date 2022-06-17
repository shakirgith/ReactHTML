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
       

        <div className="app1-header bg" style={{ backgroundImage: "url(assets/images/header-1-bg.png)" }}>
          <div id="homeBanner" className="main-banner wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
         
                  <div className="row">
                    <div className="col-lg-6 col-md-7">
                    <div className="align-self-center">
                      <div className="left-content show-up wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                       

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
                   
                      <div className="rotate col-auto">
                        <div>
                          <img alt="" className="img-fluid" src="/assets/images/preview_movie.png" />
                        </div>
                      </div>
                      <div className="squares col">
                        <img alt="" className="img-fluid img-1 set-abs" src="/assets/images/Ellipse.png" />
                        <img alt="" className="img-fluid img-2 set-abs" src="/assets/images/Ellipse.png" />
                      </div>
                      <div className="animation-circle-inverse col-auto">
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
              <div className="col-lg-12 text-center  wow fadeInDown mb-5" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div className="section-heading align-items-center">
                      <h6>Most Effective Creative</h6>
                      <h4>Service Provider For <em>All Plateform</em></h4>
                      <div className="line-dec"></div>
                    </div>
                    <p>
                    We hope this DigiMedia template is useful for your work. You can use this template for any purpose. You maycontribute a little amountvia PayPal tosupport TemplateMoin creating new templates regularly.
                    </p> 
              </div>
            
              
              <div className="featurebox mb-5">
              <div className="row g-5">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="feature-item">
                  <div className="ficon">
                      <i className="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>UI & UX Design</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="feature-item">
                  <div className="ficon">
                      <i className="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>Graphics Design</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 col-sm-6 col-12">
                <div className="feature-item">
                  <div className="ficon">
                      <i className="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>UI Development</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 col-sm-6 col-12">
                <div className="feature-item">
                  <div className="ficon">
                      <i className="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>eCommerce Solutions</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="feature-item">
                  <div className="ficon">
                      <i className="fa fa-heartbeat feature-icon"></i>
                  </div>
                  <div>
                    <h4>Digital Marketing</h4>
                    <p>Consectetur adipiscing elit donec tempus
                      pellentesque dui.</p>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 col-sm-6 col-12">
                <div className="feature-item">
                  <div className="ficon">
                      <i className="fa fa-heartbeat feature-icon"></i>
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
     
<div className="project-complate">
<       div className="container">
            <div className="row">
               
                <div className="col-lg-6 d-flex aos-init aos-animate" data-aos="">
                  <div className="offers-container">
                        <div className="section-heading">
                          <h6>Work Process</h6>
                          <h4>
                          Advance <em>Features</em>
                          </h4>
                          <div className="line-dec"></div>
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

                <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="fade-right">
                    <img className="img-fluid" src="assets/images/img.png" alt="work" />        
                </div>

            </div> 
        </div>
        <img class="img-fluid set-abs img1 move-up-down" src="../assets/images/3.png" />
        <img class="img-fluid set-abs img3 move-up-down" src="../assets/images/4.png" />
        <img class="img-fluid set-abs img2 move-right-left" src="../assets/images/2.png" />

</div>



      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h6>Our Services</h6>
                <h4>
                  What Our Agency <em>Provides</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="first-thumb active">
                          <div className="thumb">
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-01.png"
                                alt=""
                              />
                            </span>
                            Apartments
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-02.png"
                                alt=""
                              />
                            </span>
                            Food &amp; Life
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-03.png"
                                alt=""
                              />
                            </span>
                            Cars
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-04.png"
                                alt=""
                              />
                            </span>
                            Shopping
                          </div>
                        </div>
                        <div className="last-thumb">
                          <div className="thumb">
                            <span className="icon">
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
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>SEO Analysis &amp; Daily Reports</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
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
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
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
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Healthy Food &amp; Life</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
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
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
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
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Car Re-search &amp; Transport</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
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
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
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
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Online Shopping &amp; Tracking ID</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
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
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
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
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Enjoy &amp; Travel</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
                                        Template
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data Info
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> SEO Analysis
                                      </span>{" "}
                                      <span>
                                        <i className="fa fa-check"></i> Optimized
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
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
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

      <div className="counters" style={{ backgroundImage: "url(assets/images/quote-bg-v3.jpg)" }}>
        <div className="container">
              <div className="section-heading  wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                  <h6>Why Choose Us</h6>
                  <h4>15 Years Expereince</h4>
                  <div className="line-dec"></div>
              </div>
          <div className="row">
            <div className="col-lg-12">
                        


                  
              <div className="counter-list">
                        <ul>
                          <li>
                              <div className="counter-text">
                                <i className="fa fa-heartbeat feature-icon"></i>
                                <h2 className="counts">306</h2>
                                <h5 className="text-center">Years of Experience</h5>
                            </div>
                          </li>
                          <li>
                            <div className="counter-text">
                                <i className="fa fa-heartbeat feature-icon"></i>
                                <h2 className="counts">306</h2>
                                <h5 className="text-center">Project Finished</h5>
                            </div>
                          </li>
                          
                          <li>
                            <div className="counter-text">
                                <i className="fa fa-heartbeat feature-icon"></i>
                                <h2 className="counts">306</h2>
                                <h5 className="text-center">Happy Clients</h5>
                            </div>
                          </li>
                          <li>
                            <div className="counter-text">
                                <i className="fa fa-heartbeat feature-icon"></i>
                                <h2 className="counts">306</h2>
                                <h5 className="text-center">Team of Experts</h5>
                            </div>
                          </li>
                        </ul>
                    

                </div>




            </div>


           
          </div>
        </div>
      </div>

      <div id="portfolio" className="our-portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="section-heading wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h6>Our Portofolio</h6>
                <h4>
                  See Our Recent <em>Projects</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.7s"
        >
          <div className="row">
            <div className="col-lg-12">
            <OwlCarousel className='owl-theme' loop margin={10} nav>
              {/* <div className="loop owl-carousel"> */}
                <div className="item">
                  <Link to="/">
                    <div className="portfolio-item">
                      <div className="thumb">
                        <img src="assets/images/portfolio-01.jpg" alt="" />
                      </div>
                      <div className="down-content">
                        <h4>Website Builder</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link to="/">
                    <div className="portfolio-item">
                      <div className="thumb">
                        <img src="assets/images/portfolio-01.jpg" alt="" />
                      </div>
                      <div className="down-content">
                        <h4>Website Builder</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link to="/">
                    <div className="portfolio-item">
                      <div className="thumb">
                        <img src="assets/images/portfolio-02.jpg" alt="" />
                      </div>
                      <div className="down-content">
                        <h4>Website Builder</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link to="/">
                    <div className="portfolio-item">
                      <div className="thumb">
                        <img src="assets/images/portfolio-03.jpg" alt="" />
                      </div>
                      <div className="down-content">
                        <h4>Website Builder</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link to="/">
                    <div className="portfolio-item">
                      <div className="thumb">
                        <img src="assets/images/portfolio-04.jpg" alt="" />
                      </div>
                      <div className="down-content">
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

      {/* <div id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 offset-lg-4  wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="section-heading">
                <h6>Recent News</h6>
                <h4>
                  Check Our Blog <em>Posts</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div
              className="col-lg-6 show-up wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="blog-post">
                <div className="thumb">
                  <Link to="/">
                    <img src="assets/images/blog-post-01.jpg" alt="" />
                  </Link>
                </div>
                <div className="down-content">
                  <span className="category">SEO Analysis</span>
                  <span className="date">03 August 2021</span>
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
                  <span className="author">
                    <img src="assets/images/author-post.jpg" alt="" />
                    By: Andrea Mentuzi
                  </span>
                  <div className="border-first-button">
                    <Link to="/">Discover More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="blog-posts">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="post-item">
                      <div className="thumb">
                        <Link to="/">
                          <img src="assets/images/blog-post-02.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="right-content">
                        <span className="category">SEO Analysis</span>
                        <span className="date">24 September 2021</span>
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
                  <div className="col-lg-12">
                    <div className="post-item">
                      <div className="thumb">
                        <Link to="/">
                          <img src="assets/images/blog-post-03.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="right-content">
                        <span className="category">SEO Analysis</span>
                        <span className="date">24 September 2021</span>
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
                  <div className="col-lg-12">
                    <div className="post-item last-post-item">
                      <div className="thumb">
                        <Link to="/">
                          <img src="assets/images/blog-post-04.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="right-content">
                        <span className="category">SEO Analysis</span>
                        <span className="date">24 September 2021</span>
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
