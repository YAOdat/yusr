import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {

  //
  return (
    <div className='main-container'>
      <div className='header'> 
      <div className= 'gradient'> 
      <NavBar />

      <div className='header-content'>
        <h1 id='main-title'> موقع يُسر التعليمي </h1>
        <section id='subtitle'> ..تسريبات، ملخصات، دروس، شروحات </section>
        <button className='button' id='main-button'> اختر الجامعة </button>

        </div>
      </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
