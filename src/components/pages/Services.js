import React from 'react';
import '../../App.css';
import '../Cards.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

function Services(props) {
    return (
        <>
            <div className='cards'>
      <h1>SERVICES OFFERED</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mm33.jpg'
              text='Posters
               Calendars,
              Brochures & Catalogue,
              Booklets,
               Forms,
              Leaflets & Flyers,
              Bantings,
              Danglers,
              Accounts Forms,
              Writing Pads,
              File & Conference Folders,
              Flip Charts,
              Bank Forms,
              Wobblers,
              Packaging Materials'
              label='OFFSET PRINTING'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Banners,
              Diaries,
              Vehicle Branding,
              Corporate Cloth Branding,
              Mug Cup Branding,
              Ball Pen Branding,
              Plastic & Metal Item branding,
              Identification Card,
              Business Card & Invitation
              Card'
              label='DIGITAL PRINTING'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Rollup Mechanisms,
              Wind Rotators,
              Perspex (Opal /Clear),
              Correx Boards,
              ABS Boards,
              Snap Frames,
              Wall Paper,
               Digital Machine Ink,
              Vinyl,
              PVC Banner,
              Gloss Paper,
              Contravision (One Way Vision),
              Reflective Vinyl,
              X Stand,
              Concerpt Developnment'
              label='PRINTING MATERIALS SUPPLIERS'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mm4.jpg'
              text='Concerpt Developnment
               & Designing'
              label='DESIGNING'
              path='/services'
            />
            <CardItem
              src='images/mm3.jpg'
              text='T-shirt Print,
              Golf shirt Print,
              Uniforms Print,
              Umbrella Print,
              Travel Bags Print,
              Work Suites Print,
              Cap Print;
               Mug Cup,
               Ballpen Print'
              label='GIFT ADS'
              path='/services'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Flex Printing
               Vinyl Printing,
               Window Branding,
               Gazebos,
               Backlit Vinyl,
               Billboard,
             Safety Signs,
             Road Sings,
              Pylons,
              ATM Canopies,
              Tear Drops Banner'
              label='OUTDOOR BRANDING'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
        <Footer />
        </>
    );
}

export default Services

