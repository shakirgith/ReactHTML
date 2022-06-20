import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";


function ContactUs() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const form = useRef();
  console.log('form');


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gsreinfot', 'template_7n8fpdd', form.current, 'dH_n_8Bg8DG2TZwkK')
    .then((result) => {
        console.log(result.text); 
        setValues({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setStatus('SUCCESS');
    }, (error) => {
        // console.log(error.text);
        console.log('FAILED...', error);
    });

  }

  function handleInput(e) {
    console.log(e);
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

   
  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);


  return (
    <>
      <div className="innerbanner">
        <img className="img-fluid" src="assets/images/quote-bg-v3.jpg" alt="Banner Image" />
          <div className="page-heading">
              <h2>Contact Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.</p>
          </div>   
      </div>

      <div  className="contact-us section">
        <div className="container"> 
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div  
                className="section-heading wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h6>Contact Us</h6>
                <h4>
                  Get In Touch With Us <em>Now</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <div id="contact">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-dec">
                      <img src="assets/images/contact-dec.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img src="assets/images/about.jpg" alt="" />
                    {/* <div id="map">
                      <iframe
                        src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="636px"  
                        frameborder="0"
                        style="border:0"
                        allowfullscreen
                      ></iframe> 
                    </div> */}
                  </div>
                  <div className="col-lg-7">
                 


                 
                    <div className="fill-form">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="assets/images/phone-icon.png" alt="" />
                              <Link to="/">010-020-0340</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="assets/images/email-icon.png" alt="" />
                              <Link to="/">our@email.com</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img
                                src="assets/images/location-icon.png"
                                alt=""
                              />
                              <Link to="/">123 Rio de Janeiro</Link>
                            </div>
                          </div>
                        </div>
                        </div>
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="row">
                          <div className="col-lg-6">  
                          
                            <fieldset>
                              <input type="name" name="name" placeholder="Name" value={values.name} onChange={handleInput} required />
                            </fieldset>
                            <fieldset>
                            <input type="email" className="form-control" pattern="[^ @]*@[^ @]*" placeholder="Email Address" name="email" value={values.email} onChange={handleInput}  required="" />
                              {/* <input
                                type="text"
                                name="email"
                                id="email"
                                pattern="[^ @]*@[^ @]*"
                                placeholder="Your Email"
                                required=""
                              /> */}
                            </fieldset>
                            <fieldset>
                            <input type="text" className="form-control" placeholder="Subject" name="subject" value={values.subject} onChange={handleInput} required />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                            <textarea className="form-control" cols="30" rows="8" placeholder="Your message" name="message" value={values.message} onChange={handleInput} ></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                            <button type="submit"  className="btn btn-info">Send Message</button>
                              
                            </fieldset>
                            {status && renderAlert()}
                          </div>
                        </div>
                        </form>

                      
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
const renderAlert = () => (
  <div className="success-msg">
    <p>Your message submitted successfully</p>
  </div>
)

export default ContactUs;
