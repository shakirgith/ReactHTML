import React from 'react'
// import { useState, useEffect } from "react";
// import CountrySelector from '../SelectConteries';
import axios from 'axios';
import  { Component } from 'react'

class AboutUs extends Component {
 

// class AboutUs extends React.Component {

  // const [file, setFile] = useState();
  //   function handleChange(e) {
     
  //       console.log(e.target.files);
  //       setFile(URL.createObjectURL(e.target.files[0]));
  //   }


  



// const [userRegistration, setUserRegistration] = useState({
    
//     username: "",
//     email: "",
//     phone: "",
//     password: ""
// });

// const [records, setRecords] = useState([]);

// const handleInput = (e) =>  {
// const name = e.target.name;
// const value = e.target.value;
// console.log(name);

// setUserRegistration ({ ...userRegistration, [name]: value });



// }



// const handleSubmit = (e) => {
// e.preventDefault();
    
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


    
// }   


  // start local host api and save image on local path storage 
    // const [user, setUser] = useState([]);
    // const loadUsers =  async  () => {
    // const result = await  axios.post("http://172.16.20.84/ReactJS/my-react-app/public/backend/php/connection.php");
    // setUser(result.data.result);
    // console.log(result.data.result);

    // };

     

  state = {
    username: '',
    email: '',
    phone: '',
    password: '',
    mydataform: []
  }

  componentDidMount() {
    const url = 'http://172.16.20.84/ReactJS/my-react-app/public/backend/php/connection.php'
    axios.get(url).then(response => response.data)
    .then((data) => { 
     // console.log(data)
      this.setState({ mydataform: data })
      console.log(this.state.mydataform)
     })
  }
 
  handleFormSubmit( event ) {
      event.preventDefault();
 
      let formData = new FormData();
       formData.append('username', this.state.username)
      formData.append('email', this.state.email)
      formData.append('phone', this.state.phone)
      formData.append('password', this.state.password)
 
      axios({
          method: 'post',
          url: 'http://172.16.20.84/ReactJS/my-react-app/public/backend/php/connection.php',
          data: formData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          console.log(response)
          alert('New Data Successfully Added.');  
      })
      .catch(function (response) {
          console.log(response)
      });
  }



    // useEffect(() => {
    // loadUsers();
    // }, []);





// toggle on click hide/show
// const [toggle, setToggle] = useState(true)

// const handleFileChange=(e)=> {

// }

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  render() {
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
                    {this.state.mydataform.map((res) => 
                    <tr>
                    <th scope="row">{res.username}</th>
                    <td>{res.email}</td>
                    <td>{res.phone}</td>
                    <td>{res.password}</td>
                    </tr>   
    
                     )}
    
              {/* {this.state.mydataform.map((contact, index) => (
                  <tr key={index}>
                      <th scope="row">{ contact.username }</th>
                      <td>{ contact.email }</td>
                      <td>{ contact.phone }</td>
                      <td>{ contact.password }</td>
                  </tr>
                  ))} */}
    
                </tbody>
                </table> 





        </div>
      

      <form>
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
                          <input type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}  name="username" placeholder='username' />
                        </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                  <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}  pattern="[^ @]*@[^ @]*" name="email" placeholder='email'  />
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
                      <input type="text" name="phone" placeholder='phone' value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })}  />
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
                      <input type="text" name="password" placeholder='password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })}  />
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
                        <button type="submit"  className="main-button" onClick={e => this.handleFormSubmit(e)}>Send Message Now</button>
                          
                       
                      </fieldset>
                    </div>
                  </div>
                </div>
              </form>








        
      </div>
    </>
  );
}
}
export default AboutUs;
