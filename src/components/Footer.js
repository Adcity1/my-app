import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        LOOKING FORWARD TO SERVE YOUR FIRM
        </p>
      
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Excellence</h2>
            <Link to='/'>We strive to continuously raise our perfomance
and improve quality to exceed customer
expectations.
We know that to remain number one we need to
continualy offer bigger and more value then the
competition.</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact : <br/>+265 995 506 545
                           +265 881 500 395</Link>
            <Link to='/'>Email : <br/>Yotamnyuma@gmail.com,
                            Jmskassim@gmail.com</Link>
            <Link to='/'>Working Hours:<br/>24 hours every day</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Location</h2>
            <Link to='/'>Maselema, chipembere
               Highway, Reunion House,
               Office No.23</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>DELIVERY PROMISE</h2>
            <Link to='/'>Strong reputation is built on the successful delivery of all assignments, no matter how tight
the timeframe. Our creed is to meet the deadline.</Link>
            
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Adcity Advertisers
              
            </Link>
          </div>
          <small class='website-rights'> © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;