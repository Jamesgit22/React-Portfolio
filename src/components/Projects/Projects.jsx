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
                  className='light-bg rounded ps-4 cus-txt-lightgrey'
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
                  className='light-bg rounded ps-4 cus-txt-lightgrey'
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
            {/* Third project */}
            <div className='row dark-grey-bg mt-5'>
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
                  className='light-bg rounded ps-4 cus-txt-lightgrey overlay'
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className='clear-bg'>Code Quiz</h4>
                  <p className='clear-bg'>
                    Test your coding knowledge while playing against a clock in
                    this code quiz! Save your highscores and play again until
                    you have learned everything you can.
                  </p>
                  <div className='row'>
                    <div className='col-12 p-btns-container'>
                      <a href='https://jamesgit22.github.io/coding-quiz-game/'>
                        <button className='project-btns'>Deployed App</button>
                      </a>
                      <a href='https://github.com/Jamesgit22/coding-quiz-game'>
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
            {/* 4th Project */}
            <div className='row dark-grey-bg mt-5'>
              <div
                id='project-2'
                className='col-12 dark-grey-bg mt-5 d-flex justify-content-end'
              >
                <motion.div
                  id='p2-overlay'
                  className='light-bg rounded ps-4 cus-txt-lightgrey'
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className='clear-bg'>Weather App</h4>
                  <p className='clear-bg'>
                    An application to check the current weather and five day
                    forecast.
                  </p>
                  <div className='row'>
                    <div className='col-12 p-btns-container'>
                      <a href='https://jamesgit22.github.io/weather-dashboard/'>
                        <button className='project-btns'>Deployed App</button>
                      </a>
                      <a href='https://github.com/Jamesgit22/weather-dashboard'>
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
                    src='src/assets/images/weather1.png'
                    alt=''
                    initial={{ opacity: 0, x: '-300px' }}
                    whileInView={{ opacity: 1, x: '0px' }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                  />
                </div>
              </div>
            </div>
            {/* 5th Project */}
            <div className='row dark-grey-bg mt-5'>
              <div id='project-1' className='col-12 dark-grey-bg d-flex mt-5'>
                <div className='col-6 clear-bg'>
                  <motion.img
                    className='project-img'
                    src='src/assets/images/note_taker.png'
                    alt=''
                    initial={{ opacity: 0, x: '300px' }}
                    whileInView={{ opacity: 1, x: '0px' }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                  />
                </div>
                <motion.div
                  id='p1-overlay'
                  className='light-bg rounded ps-4 cus-txt-lightgrey'
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className='clear-bg'>Note Taker</h4>
                  <p className='clear-bg'>A webapp to quickly make notes.</p>
                  <div className='row'>
                    <div className='col-12 p-btns-container'>
                      <a href='https://hidden-badlands-10348.herokuapp.com/'>
                        <button className='project-btns'>Deployed App</button>
                      </a>
                      <a href='https://github.com/Jamesgit22/Note-Taker'>
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
            {/* 6th Project */}
            <div className='row dark-grey-bg mb-5 mt-5'>
              <div
                id='project-2'
                className='col-12 dark-grey-bg mt-5 d-flex justify-content-end'
              >
                <motion.div
                  id='p2-overlay'
                  className='light-bg rounded ps-4 cus-txt-lightgrey'
                  initial={{ opacity: 0, y: '10px' }}
                  whileInView={{ opacity: 1, y: '0px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className='clear-bg'>Work Day Schedular:</h4>
                  <p className='clear-bg'>
                    A webapp to help keep track of your workday agenda.
                  </p>
                  <div className='row'>
                    <div className='col-12 p-btns-container'>
                      <a href='https://jamesgit22.github.io/work-day-scheduler/'>
                        <button className='project-btns'>Deployed App</button>
                      </a>
                      <a href='https://github.com/Jamesgit22/work-day-scheduler'>
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
                    src='src/assets/images/workDay.png'
                    alt=''
                    initial={{ opacity: 0, x: '-300px' }}
                    whileInView={{ opacity: 1, x: '0px' }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
