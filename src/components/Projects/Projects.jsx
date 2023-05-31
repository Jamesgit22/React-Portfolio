import { motion } from 'framer-motion';
import './Projects.css';

export default function Projects() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center dark-grey-bg'>
          <div id='project-container' className='col-10 dark-grey-bg mt-5'>
            <motion.h2
              id='project-header'
              className='section-headers text-center mt-5 cus-txt-white dark-grey-bg'
              initial={{ opacity: 0, y: '50px' }}
              whileInView={{ opacity: 1, y: '0px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Projects
            </motion.h2>
            {/* Best Project */}
            <div className='row dark-grey-bg mt-5'>
              <div id='project-1' className='col-12 dark-grey-bg d-flex mt-5'>
                <div className='col-6 clear-bg'>
                  <motion.img
                    className='project-img'
                    src='src/assets/images/projects/woodcutting.png'
                    alt=''
                    initial={{ opacity: 0, x: '300px' }}
                    whileInView={{ opacity: 1, x: '0px' }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                  />
                </div>
                <motion.div
                  id='p1-overlay'
                  className='light-bg rounded ps-4 cus-txt-darkgrey'
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className='clear-bg'>Lorem Idle:</h4>
                  <p className='clear-bg'>
                    This is a full stack REST afk RPG that allows the user to
                    create a profile and begin collecting resources and
                    experience to progress. As the name suggests, you are able
                    to leave the browser and continue to collect resources while
                    away but at a slower rate.
                  </p>
                  <div className='row'>
                    <div className='col-12 p-btns-container'>
                      <a href='https://warm-tundra-68123.herokuapp.com/'>
                        <button className='project-btns'>Deployed App</button>
                      </a>
                      <a href='https://github.com/Jamesgit22/lorem-idle'>
                        <img
                          className='github-svg'
                          src='src/assets/images/github.svg'
                          alt='link to project'
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* Second Project */}
            <div className='row dark-grey-bg mt-5'>
              <div
                id='project-2'
                className='col-12 dark-grey-bg mt-5 d-flex justify-content-end'
              >
                <motion.div
                  id='p2-overlay'
                  className='light-bg rounded ps-4 cus-txt-darkgrey'
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className='clear-bg'>Date on a Dime:</h4>
                  <p className='clear-bg'>
                    No more wasting your day trying to decide what you are going
                    instead of doing it! Date on a Dime helps user quickly
                    choose a date or activity based off of the users input.
                  </p>
                  <div className='row'>
                    <div className='col-12 p-btns-container'>
                      <a href='https://jamesgit22.github.io/Date-on-a-Dime/'>
                        <button className='project-btns'>Deployed App</button>
                      </a>
                      <a href='https://github.com/Jamesgit22/Date-on-a-Dime'>
                        <img
                          className='github-svg'
                          src='src/assets/images/github.svg'
                          alt='link to project'
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
                <div className='col-6 clear-bg'>
                  <motion.img
                    className='project-img border border-dark'
                    src='src/assets/images/projects/date.png'
                    alt=''
                    initial={{ opacity: 0, x: '-300px' }}
                    whileInView={{ opacity: 1, x: '0px' }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                  />
                </div>
              </div>
            </div>
            {/* last project */}
            <div className='row dark-grey-bg mb-5 mt-5'>
              <div
                id='project-3'
                className='col-12 dark-grey-bg mb-5 d-flex mt-5'
              >
                <div className='col-6 clear-bg'>
                  <motion.img
                    className='project-img'
                    src='src/assets/images/projects/quiz.png'
                    alt=''
                    initial={{ opacity: 0, x: '300px' }}
                    whileInView={{ opacity: 1, x: '0px' }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                  />
                </div>
                <motion.div
                  id='p1-overlay'
                  className='light-bg rounded ps-4 cus-txt-darkgrey overlay'
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className='clear-bg'>Place Holder:</h4>
                  <p className='clear-bg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe obcaecati dolore, vero sed magni temporibus laudantium
                    cum, eveniet a et ratione, modi repellat nisi eos atque
                    labore corporis repellendus veritatis.
                  </p>
                  <div className='row'>
                    <div className='col-12 p-btns-container'>
                      <a href='https://jamesgit22.github.io/Date-on-a-Dime/'>
                        <button className='project-btns'>Deployed App</button>
                      </a>
                      <a href='https://github.com/Jamesgit22/Date-on-a-Dime'>
                        <img
                          className='github-svg'
                          src='src/assets/images/github.svg'
                          alt='link to project'
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
