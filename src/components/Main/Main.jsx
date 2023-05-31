import React from 'react';
import { useState } from 'react';
import AboutMe from '../About/About';
import ContactBanner from '../Contact/ContactBanner';
import ContactView from '../Contact/Contact';
import NavBar from '../Nav/Nav';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Splash from '../Splash/Splash';

export default function Main() {
  const [currentMain, setCurrentMain] = useState('Main');

  const changeMainView = () => {
    if (currentMain === 'Main') {
      return (
        <>
          <div id='main-container' className='container-fluid'>
            <div id='main-div' className='col-12'>
              {/* Hero */}
              <Splash />
              {/* skills */}
              <Skills />
              {/* Projects */}
              <Projects />
              {/* About Me */}
              <AboutMe />
              {/* Contact Banner */}
              <ContactBanner
                currentMain={currentMain}
                handleMainChange={handleMainChange}
              />
            </div>
          </div>
        </>
      );
    }
    if (currentMain === 'Contact') {
      return <ContactView />;
    }
  };
  console.log(currentMain);

  const handleMainChange = (mainPage) => setCurrentMain(mainPage);
  return <>{changeMainView()}</>;
}
