import {BsLinkedin} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import {BsYoutube} from 'react-icons/bs';


export default function Footer() {

    const newWindow = () => {
        window.open('https://t.me/odatt', '_blank');
    }
    
    const waNewWindow = () => {
        window.open('https://wa.me/962777844696', '_blank');
    }
    const newWindowLI = () => {
        window.open('https://www.linkedin.com/in/yaserodat/', '_blank');
    }

    const newWindowYT = () => {
        window.open('https://www.youtube.com/@YaserOdat', '_blank');
    }
    return (
        <div className='footer'>
            <div className='footer-content'>
                <h3> جميع الحقوق محفوظة </h3>
                <h3>تصميم ياسر عودات</h3>
                <BsLinkedin size='16px' onClick={newWindowLI}  />
                <BsYoutube size='16px' onClick={newWindowYT}/>
                <BsTelegram size='16px' onClick={newWindow}/>
                <IoLogoWhatsapp size='16px' onClick={waNewWindow}/>

                <h3> ©2022 موقع يُسر التعليمي </h3>


            </div>
        </div>
    )
}