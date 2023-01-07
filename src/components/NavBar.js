import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const closeNav = () => setShow(false);


  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <h1> يُسر </h1>
      </div>
      <div className='nav-right'>
        <GiHamburgerMenu className='hamburger' size='20px' onClick={() => setShow(!show)} />
        {show &&
          <ul>
            <AiFillCloseCircle className='close-nav' size='35px' onClick={() => setShow(!show)} />

            <Link to={'/'} onClick={closeNav}> <li id="first-li-element">الرئيسية </li> </Link>
            <Link to={'/universities'} onClick={closeNav}> <li> الجامعات </li> </Link>
            {/* <li><a href='#'> تبرع </a></li> */}
            <li><a href='#'> عن الموقع </a></li>
          </ul>
        }
      </div>


    </nav>
  );
}

export default NavBar;