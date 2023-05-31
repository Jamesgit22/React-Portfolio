import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactBanner.css';

export default function ContactBanner({ currentMain, handleMainChange }) {
  return (
    <div className='container-fluid'>
      <motion.div
        className='row'
        initial={{ x: '10px', width: '1%' }}
        whileInView={{ x: '12px', width: '101%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div id='contact-call' className='col-12 text-center mb-5'>
          <motion.h2
            className='clear-bg'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
          >
            Let's Build Something!
          </motion.h2>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            id='contact-call-btn'
            onClick={() => handleMainChange('Contact')}
          >
            Contact
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
