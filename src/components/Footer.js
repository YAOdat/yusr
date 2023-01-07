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
                <BsLinkedin size='17px' onClick={newWindowLI} className='footer-icons' title="Feel free to connect with me on Linkedin"/>
                <BsYoutube size='17px' onClick={newWindowYT} className='footer-icons'/>
                <BsTelegram size='17px' onClick={newWindow} className='footer-icons'/>
                <IoLogoWhatsapp size='17px' onClick={waNewWindow} className='footer-icons'/>

                <h3> ©2022 موقع يُسر التعليمي </h3>


            </div>
        </div>
    )
}