import { motion } from 'framer-motion';
import './Splash.css';

export default function Splash() {
  return (
    <>
      <div id='hero-container' className='row'>
        <div className='col-12 d-flex justify-content-center '>
          <div
            id='hero'
            className='d-flex col-8 rounded bg-light align-self-center '
          >
            <div id='hero-left' className='col-7'>
              <motion.h1
                initial={{ opacity: 0, y: '70px' }}
                animate={{ opacity: [0, 0, 1], y: '0px' }}
                transition={{ duration: 1, delay: 0.2 }}
                className='ps-2 pt-2 clear-bg'
              >
                Hey there,
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                className='ps-2 pe-5 pt-2'
              >
                My name is <span id='name'>James</span>, <br></br>I am a
                fullstack web developer based out of Pensacola, Florida.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1] }}
                transition={{ duration: 3 }}
                className='ps-2 pt-3 pe-5'
              >
                I enjoy creating fullstack web applications with a focus on the
                front end. I am a life long learner and I am always aiming to
                add new skills to my toolbelt.
              </motion.p>
              <div className='row'>
                <div className='col-12'>
                  <a href='https://docs.google.com/document/d/1un6gqCJo92rFC6Ey8mim1ckMRxJRjI5p/edit?usp=sharing&ouid=104125383451440968631&rtpof=true&sd=true'>
                    <motion.button
                      id='res-btn'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 1.5 }}
                    >
                      Resumè
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
            <div id='hero-right' className='col-5'>
              <motion.img
                initial={{ opacity: 0, x: '120px' }}
                animate={{ opacity: [0, 0, 0, 0, 0.5, 1], x: '0px' }}
                transition={{ duration: 2 }}
                id='hero-logo'
                className='clear-bg'
                src='images/logo.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
