import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

const NavBar = () => {
    const [show, setShow] = useState(false);


    return (
        <nav className='navbar'>
        <div className='nav-left'>
          <h1> يُسر </h1>
        </div>
        <div className='nav-right'>
            <GiHamburgerMenu className='hamburger' size='20px' onClick={() => setShow(!show)}/>
            {show && 
          <ul>
      <AiFillCloseCircle className='close-nav' size='35px' onClick={() => setShow(!show)}/>

            <li id="first-li-element"><a href='#'> الرئيسية </a></li>
            <li><a href='#'> الجامعات </a></li>
            <li><a href='#'> تبرع </a></li>
            <li><a href='#'> عن الموقع </a></li>
          </ul>
          }
        </div>


      </nav>
    );
    }

export default NavBar;