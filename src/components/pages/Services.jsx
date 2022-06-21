import React from "react";
import { MetaDescription, MetaTitle } from "../GeneralFunction";

function Services() {
  MetaTitle('Services Page')
  MetaDescription('Services Page description')
  return (
    <>
          <div className="innerbanner">
        <img className="img-fluid" src="assets/images/quote-bg-v3.jpg" alt="Banner Image" />
          <div className="page-heading">
              <h2>Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.</p>
          </div>   
      </div>
      <div className="container text-bg-dark">Services content</div>
    </>
  );
}

export default Services;
