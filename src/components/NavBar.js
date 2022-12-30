import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

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

            <Link to= {'/'}> <li id="first-li-element"><a href='#'> الرئيسية </a></li> </Link>
            <Link to={'/universities'}> <li><a href='#'> الجامعات </a></li> </Link>
            {/* <li><a href='#'> تبرع </a></li> */}
            <li><a href='#'> عن الموقع </a></li>
          </ul>
          }
        </div>


      </nav>
    );
    }

export default NavBar;