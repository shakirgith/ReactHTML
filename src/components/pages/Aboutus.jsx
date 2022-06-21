import React from "react";
import { useState, useEffect } from "react";


function AboutUs() {


  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="innerbanner">
        <img className="img-fluid" src="assets/images/inner-banner.jpg" alt="Banner Image" />
          <div className="page-heading">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.</p>
          </div>   
      </div>



      <div className="container mt-5">
      


<button type="button" class="btn btn-primary" onClick={handleShow}>
  Launch demo modal
</button>


<div show={show} onHide={handleClose}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">  
        test
      </div>
    
      <div class="modal-footer">  
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-primary"  onClick={handleClose}>
                Remove
              </button>
      </div>
    </div>
  </div>
</div>




        <div className="mt-5">About Us content</div>
      </div>
    </>
  );
}

export default AboutUs;
