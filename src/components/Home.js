import NavBar from './NavBar';
import { Link } from "react-router-dom";
import '../App.css';

function Home() {

  return (
    <>
  
  <div className='header'>
  <div className='gradient'>
    <div className='header-content'> 
      <h1 id='main-title'> موقع يُسر التعليمي </h1>
      <section id='subtitle'> ..تسريبات، ملخصات، دروس، شروحات </section>
      <Link to={'/universities'}> <button className='button' id='main-button'> اختر الجامعة </button> </Link>
    </div>
    </div>
    </div>


    </>
  );
}

export default Home;
