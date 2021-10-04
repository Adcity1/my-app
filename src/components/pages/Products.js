import React from 'react';
import '../../App.css';
import './AboutUs.css';
import './Products.css';
import Footer from '../Footer';
import img2 from '../../images/mm122.jpg';
import img3 from '../../images/mm44.jpg';
import img4 from '../../images/mm5.jpg';
import img5 from '../../images/mm8.jpg';
import img6 from '../../images/mm7.jpg';
import img7 from '../../images/mm9.jpg';
import img8 from '../../images/mm10.jpg';
import img10 from '../../images/mm14.jpg';
import img9 from '../../images/mm15.jpg';
function AboutUs() {
    return (
        <>
        <div>
<div class="w3-row-padding w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-twothird">
    <h2>HEIDEBERG</h2>
      <h5 class="w3-padding-32">
      machines are recommended according to world printing standards. The Production
      Room is equiped with modern vibrant Machines starting from Designing Section, Dark Room,
      Printing Section and Finishing Department. We have HEIDEBERG MOZ Offset Machine which
      runs 20,000 A2 sheets within an hour.
      </h5>
 
        <h2>HEIDELBERG KORD 64</h2>
      <h5 class="w3-padding-32">
      Offset Machine which runs 10,000 A2 sheets within an hour without
      compromising quality.
       Adcity Advertisers guarantee’s quality in finishing section, we use POLAR Guillotine machine for
       trimming, etc.
      </h5>
    </div>

    <div class="w3-third w3-center">
    
      <img src={img2} alt=""width="400px" />
      
    </div>
  </div>
</div>

<div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
  <div class="w3-content">
    
      <h2>RECENT WORKS</h2>

          <div class="responsive">
  <div class="gallery">
    
      <img src={img3} alt="Cinque Terre" />
    <div class="desc">Maldeco Shop Branding</div>
  </div>
</div>


<div class="responsive">
  <div class="gallery">
    
      <img src={img4} alt="Forest" />

    <div class="desc">Boss Fisheries Car Branding</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
  
      <img src={img5} alt="Northern Lights"  />
  
    <div class="desc">Reunion Insurance Pylon</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    
      <img src={img6} alt="Mountains" width="400px" />
    
    <div class="desc">Reunion Insurance Billboard</div>
  </div>
</div>
<br/>
<div class="responsive">
  <div class="gallery">
    
      <img src={img7} alt="Cinque Terre" />
    <div class="desc">Shell Helix office Branding</div>
  </div>
</div>


<div class="responsive">
  <div class="gallery">
    
      <img src={img8} alt="Forest" />

    <div class="desc">Shell Helix office Branding</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
  
      <img src={img10} alt="Northern Lights" />
  
    <div class="desc">Maldeco Contravision</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    
      <img src={img9} alt="Mountains" height="600px" />
    
    <div class="desc">Kamuzu University Rollup Banners</div>
  </div>
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
