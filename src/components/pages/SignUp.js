import React, { useRef } from 'react';
import '../../App.css';
import Footer from '../Footer';
import './SignUp.css';
import img10 from '../../images/mm33.jpg';
import emailjs  from 'emailjs-com';

const Mailer= () =>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r2pn6tf', 'template_um7mtn2', form.current, 'user_dODhigiPFtNIqD2LGfi31')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
return(<>
  <div>
  <div class="w3-row-padding w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-twothird">
   <form ref={form} onSubmit={sendEmail}>
   <h1>Qautation Form</h1>
   <div class="row">
      <div class="col-25">
        <label for="cname">Company Name</label>
        <i class="fas fa-balance-scale-left"></i>
      </div>
      <div class="col-75">
        <input type="text" id="name" name="name" placeholder="Your  Bussiness name.."/>
      </div>
      <br/>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Email</label>
        <i class="fas fa-envelope-open-text"></i>
      </div>
      <div class="col-75">
      <input type="email" id="email" name="email" placeholder="Your Email address.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="aservice">services</label>
        <i class="fab fa-servicestack"></i>
      </div>
      <div class="col-75">
        <select id="service" name="service">
          <option value="australia">Offest</option>
          <option value="canada">Digital</option>
          <option value="usa">Signage</option>
          <option value="usa">Materials</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="Amessage">Decriptions</label>
        <i class="fas fa-reply-all"></i>
      </div>
      <div class="col-75">
        <textarea id="message" name="message" placeholder="Write your job description.." ></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Send"/>
    </div>
    </form>
    
  
    </div>

    <div class="w3-third w3-center">
    
      <img src={img10} alt=""width="300px" />
      
    </div>
  </div>
</div>

  </div>
  <Footer />
  </>
);
}

export default Mailer;