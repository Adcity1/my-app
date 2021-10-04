import React from 'react';
import '../../App.css';
import './AboutUs.css';
import Footer from '../Footer';
import img2 from '../../images/mm3.jpg';

function AboutUs() {
    return (
        <>
        <div>
<div class="w3-row-padding w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-twothird">
      <h1>OUR VISION</h1>
      <h5 class="w3-padding-32">“To be Malawi’s leading printing company
offering unique world class services”
Unique means best and differentiated in
terms of; Customer value , Quality and reliabbility of produst and
services, Consistency, Competitive prices, Guaranteed deliver ability</h5>
 
        <h1>OUR MISSION</h1>
      <h5 class="w3-padding-32">“To be recognised as one of the major
providers in digital & offset Printing services
by both large and small organisations”
<hr/>
We value our customers such that we treat
them as kings with respect, courteous
and prompt service at all touch points. We
believe that they come to us by choice not by
chance; customer’s feedback is what drives
us on ways to improve our services.
<hr/>
We are commited to partnershp; we strive
on developing long term mutually beneficial
relationships with our clients and out-perform
competitors with superior customers’
experience.</h5>
    </div>

    <div class="w3-third w3-center">
    
      <img src={img2} alt=""width="400px" />
      
    </div>
  </div>
</div>

<div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-third w3-center">
      <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
    </div>

    <div class="w3-twothird">
      <h1>Intergrity and Experience</h1>
      <h5 class="w3-padding-32">We are committed to doing the right thing in
all apsects of our business which requires us
to exhibit unwavering dedication to ethical
standards and stringent code of business
conduct.</h5>

          <h2> Excellence</h2>

      <h5 class="w3-padding-32">We strive to continuously raise our perfomance
and improve quality to exceed customer
expectations.
We know that to remain number one we need to
continualy offer bigger and more value then the
competition.</h5>
      
    </div>
  </div>
</div>
<div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">Quote of the day: live life</h1>
    
</div>

        </div>
        <Footer />
    </>
    );
}

export default AboutUs
