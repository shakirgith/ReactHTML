import React from 'react'
import { useState, useEffect } from "react";
// import CountrySelector from '../SelectConteries';
import axios from 'axios';


function AboutUs() {

  // const [file, setFile] = useState();
  //   function handleChange(e) {
     
  //       console.log(e.target.files);
  //       setFile(URL.createObjectURL(e.target.files[0]));
  //   }


  



const [userRegistration, setUserRegistration] = useState({
    
    username: "",
    email: "",
    phone: "",
    password: ""
});

const [records, setRecords] = useState([]);

const handleInput = (e) =>  {
const name = e.target.name;
const value = e.target.value;
console.log(name);

setUserRegistration ({ ...userRegistration, [name]: value });



}



const handleSubmit = (e) => {
e.preventDefault();
    
//     const value = e.target.value; 
//  if this.value = e.target.value(0) {
//     alert("Please fill the form field.");
// }

// else {

// const RegistrationRecords = { ...userRegistration, id:new Date().getTime().toString()}
// console.log(records);
// setRecords ([ ...records, RegistrationRecords]);
// console.log(records);

// setUserRegistration({ username: "", email: "", phone: "",   password: ""});


    
}   


  // start local host api and save image on local path storage 
    const [user, setUser] = useState([]);
    const loadUsers =  async  () => {
    const result = await  axios.post("http://localhost/ReactApi/view.php");
    setUser(result.data.phpresult);
    console.log(result.data.phpresult);

    };

    useEffect(() => {
    loadUsers();
    }, []);





// toggle on click hide/show
// const [toggle, setToggle] = useState(true)

// const handleFileChange=(e)=> {

// }

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <div className="innerbanner">
        <img className="img-fluid" src="assets/images/inner-banner.jpg" alt="Banner Image" />
          <div className="page-heading">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.</p>
          </div>   
      </div>



      <div className="container mt-5 about-page">

        <div className='mb-80'>
            <div className="text-center">
                <h1>MySQL Database</h1>
            </div>
        <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Password</th>
                    </tr>
                </thead>
    
                <tbody> 
                    {user.map((res) => 
                    <tr>
                    <th scope="row">{res.username}</th>
                    <td>{res.email}</td>
                    <td>{res.phone}</td>
                    <td>{res.password}</td>
                    </tr>   
    
                     )}
    
    
    
                </tbody>
                </table> 





        </div>
      

      <form action="" autoComplete="off" onSubmit={handleSubmit}>
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
                  <div className="col-lg-6 col-sm-6 col-12">
                        <fieldset>
                          <input type="text" value={userRegistration.username} onChange={handleInput} name="username" placeholder='username' />
                        </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                  <input type="email" value={userRegistration.email} onChange={handleInput}  pattern="[^ @]*@[^ @]*" name="email" placeholder='email'  />
                        {/* <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email"
                          required=""
                        /> */}
                      </fieldset>
                  </div>
                    <div className="col-lg-6 col-sm-6 col-12">
    
                      <fieldset>
                      <input type="text" value={userRegistration.phone} onChange={handleInput} name="phone" placeholder='phone'  />
                        {/* <input
                          type="subject"
                          name="text"
                          id="subject"
                          placeholder="Subject"
                          autocomplete="on"
                        /> */}
                      </fieldset>
                 

                    
                     
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
    
                      <fieldset>
                      <input type="text" value={userRegistration.password} onChange={handleInput} name="password" placeholder='password'  />
                        {/* <input
                          type="subject"
                          name="text"
                          id="subject"
                          placeholder="Subject"
                          autocomplete="on"
                        /> */}
                      </fieldset>
                 

                    
                     
                    </div>
                    {/* <div className="col-lg-6 col-sm-6 col-12">
                    <fieldset>
                          <select name="cars" className="form-control">
                            <option selected>Select</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                      </fieldset>   
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                    <CountrySelector />
                    </div> */}

                    {/* <div className="col-lg-12">
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
                     
                    </div> */}
                    {/* <div className="col-lg-6 col-sm-6 col-12">
                    <fieldset>
                        <div className='customFileUpload'>

                        <input class="form-control" type="file" id="formFile" onChange={handleChange} />

                          <div className='PreviewFile'>
                            <img src="{file}" alt="upload Image" />
                          </div>

                        </div>
                      </fieldset>
                    </div> */}

                    <div className="col-lg-12">
                      <fieldset>
                        <button name="submit"
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
    </>
  );
}

export default AboutUs;
