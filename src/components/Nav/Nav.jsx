import React from 'react';
import { useState } from 'react';
import './Nav.css';
import { AnimatePresence, motion } from 'framer-motion';

function NavBar({ view, handleViewChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className='container-fluid'>
      <div id='nav-row' className='row'>
        <nav
          id='nav-bar'
          className='d-flex col-12 justify-content-between align-items-center'
        >
          <div className='col-4 clear-bg blur'>
            <img
              id='nav-logo'
              className='clear-bg'
              src='src/assets/images/logosmall.png'
              alt=''
            />
          </div>
          <div
            id='desktop-nav'
            className='col-8 d-flex justify-content-end clear-bg'
          >
            <button
              className='text-decoration-none light-text clear-bg pt-2 pb-2 ps-3 pe-3 mb-1 mt-1'
              href='/'
              onClick={() => handleViewChange('Projects')}
            >
              Projects
            </button>
            <button
              className='text-decoration-none light-text clear-bg pt-2 pb-2 ps-3 pe-3 mb-1 mt-1'
              href='/'
              onClick={() => handleViewChange('About')}
            >
              About Me
            </button>
            <button
              className='text-decoration-none light-text clear-bg pt-2 pb-2 ps-3 pe-3 mb-1 mt-1'
              href='/'
              onClick={() => handleViewChange('Contact')}
            >
              Contact
            </button>
            <button
              className='text-decoration-none light-text clear-bg pt-2 pb-2 ps-3 pe-3 mb-1 mt-1'
              href='/'
              onClick={() => handleViewChange('Home')}
            >
              Home
            </button>
          </div>
          <div id='mobile-nav' className='col-8 d-flex text-end clear-bg'>
            <div id='hamburger-icon' onClick={() => toggleMenu()}>
              <div className={`bar1 bars ${isOpen ? 'open' : ''}`}></div>
              <div className={`bar2 bars ${isOpen ? 'open' : ''}`}></div>
              <div className={`bar3 bars ${isOpen ? 'open' : ''}`}></div>
            </div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0 }}
                id='mobile-menu'
                className={`${isOpen ? 'open' : ''}`}
              >
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className='text-decoration-none light-text clear-bg pt-2 pb-2 ps-3 pe-3 mb-1 mt-1'
                  href='/'
                  onClick={() => {
                    handleViewChange('Projects');
                    toggleMenu();
                  }}
                >
                  Projects
                </motion.button>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className='text-decoration-none light-text clear-bg pt-2 pb-2 ps-3 pe-3 mb-1 mt-1'
                  href='/'
                  onClick={() => {
                    handleViewChange('About');
                    toggleMenu();
                  }}
                >
                  About Me
                </motion.button>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className='text-decoration-none light-text clear-bg pt-2 pb-2 ps-3 pe-3 mb-1 mt-1'
                  href='/'
                  onClick={() => {
                    handleViewChange('Contact');
                    toggleMenu();
                  }}
                >
                  Contact
                </motion.button>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className='text-decoration-none light-text clear-bg pt-2 pb-2 ps-3 pe-3 mb-1 mt-1'
                  href='/'
                  onClick={() => {
                    handleViewChange('Home');
                    toggleMenu();
                  }}
                >
                  Home
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
