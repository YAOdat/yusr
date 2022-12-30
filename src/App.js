import NavBar from './components/NavBar';
import Universities from './components/Universities';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Subjects from './components/Subjects';
import './App.css';

function App() {

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


            </Routes>
        </div>

        <ContactUs />

      <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
