import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function section() {
    return (
        <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>ABOUT US</h1>
        <p>"Adcity Advertisers is a full service digital & Offset printing company
        <br/>focusing on printing various stationery and advertising needs of
        <br/>corporate sector and the public at large.The foundation of the
        <br/>our business is based on Trust, Quality, Relationship,Innovation,
        <br/> Team Work, integrity and honesty. We take pride in the client 
        <br/>relationship that have developed resulting in independency and
        <br/> mutual growth."</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          
        </div>
      </div>
    );
}

export default section
