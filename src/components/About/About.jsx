import { motion } from 'framer-motion';
import './About.css';

export default function AboutMe() {
  return (
    <>
      {/* About me */}
      <div className='container fluid'>
        <div
          id='about-container'
          className='row justify-content-center light-bg'
        >
          <div className='col-8 d-block'>
            <motion.h2
              className='text-center section-headers cus-txt-white mt-5 mb-5'
              initial={{ opacity: 0, y: '50px' }}
              whileInView={{ opacity: 1, y: '0px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className='text-center'
              initial={{ opacity: 0, y: '10px' }}
              whileInView={{ opacity: 1, y: '0px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Like many developers, I discovered my interest in computers and
              coding while playing video games as a kid. I got my very first
              taste of coding playing with a Minecraft mod called Computer
              Craft. Since then, I have been learning and practicing coding a
              little at a time until I took a leap and decided to try to change
              mine and my family's lives by attending a coding bootcamp at UCF.
              Outside of work, I am a family man first, and there is nothing
              better than spending time with my wife and son. I also enjoy
              "trying" to fish, playing music, and going to the beach.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
