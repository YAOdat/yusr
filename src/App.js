import NavBar from './components/NavBar';
import Universities from './components/Universities';
import English from './components/English';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Subjects from './components/Subjects';
// import ReactGA from 'react-analytics';
import './App.css';

function App() {
  // ReactGA.initialize('G-R1K3ET5326');
  // ReactGA.pageview(window.location.pathname + window.location.search);
  // ReactGA.event({
  //   category: 'Button',
  //   action: 'Click',
  //   label: 'Sign Up'
  // });

  const [showUniversity, setShowUniversity] = useState(false);

  return (
    <BrowserRouter>
      <div className='main-container'>
          <div className='gradient'>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/universities' element={<Universities />} />
              <Route path='/universities/subjects' element={<Subjects />} />
              <Route path='/universities/subjects/english' element={<English />} />


            </Routes>
        </div>

        <ContactUs />

      <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
