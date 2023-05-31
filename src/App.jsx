import { useState } from 'react';
import './App.css';
import AboutMe from './components/About/About';
import NavBar from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Main from './components/main/Main';
import ContactView from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [currentView, setView] = useState('Home');

  // function to change View (default needs to be main....)
  const changeView = () => {
    if (currentView === 'Home') {
      return <Main />;
    }
    if (currentView === 'Projects') {
      return <Projects />;
    }
    if (currentView === 'About') {
      return <AboutMe />;
    }
    if (currentView === 'Contact') {
      return <ContactView />;
    }
  };
  console.log(currentView);

  const handleViewChange = (page) => setView(page);

  return (
    <>
      <div id='main-container' className='container-fluid'>
        <div id='main-div' className='col-12 p-0 m-0'>
          <NavBar
            currentView={currentView}
            handleViewChange={handleViewChange}
          />
          {changeView()}
          <Footer
            currentView={currentView}
            handleViewChange={handleViewChange}
          />
        </div>
      </div>
    </>
  );
}
