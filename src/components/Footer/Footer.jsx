import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer({ view, handleViewChange }) {
  return (
    <>
      <div className='container-fluid'>
        <div id='footer-row' className='row'>
          <div id='footer-container' className='col-12 d-flex'>
            <div
              id='footer-icons'
              className='col-4 d-flex justify-content-evenly align-items-center align-self-center'
            >
              <a className='icon-links' href='https://github.com/Jamesgit22'>
                <img src='images/github.png' alt='Github logo' />
              </a>
              <a
                className='icon-links'
                href='https://www.linkedin.com/in/james-schroeder-37aa5a270?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bwv6S%2FH5IQZCl4hqou6HYAg%3D%3D'
              >
                <img
                  src='images/linkedIn.png'
                  alt='linked in logo'
                />
              </a>
              <a className='icon-links' href='mailto:jschroeder2296@gmail.com'>
                <img src='images/email.png' alt='Email logo' />
              </a>
            </div>
            <div
              id='footer-handles'
              className='col-4 align-self-center d-block'
            >
              <div className='row justify-content-center'>
                <div id='handles' className='col-11'>
                  <p>jamesgit22</p>
                  <p>jschroeder2296@gmail.com</p>
                  <p>850.530.5461</p>
                </div>
              </div>
              <a href='https://docs.google.com/document/d/1un6gqCJo92rFC6Ey8mim1ckMRxJRjI5p/edit?usp=sharing&ouid=104125383451440968631&rtpof=true&sd=true'>
                <button id='footer-btn'>Resumé</button>
              </a>
            </div>
            <div
              id='footer-nav-container'
              className='col-4 d-flex justify-content-evenly align-items-center'
            >
              <button className='footer-nav'>
                <a href='/' className='text-decoration-none'>
                  Home
                </a>
              </button>
              <button
                className='footer-nav'
                onClick={() => handleViewChange('Projects')}
              >
                Projects
              </button>
              <button
                className='footer-nav'
                onClick={() => handleViewChange('About')}
              >
                About Me
              </button>
              <button
                className='footer-nav'
                onClick={() => handleViewChange('Contact')}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
