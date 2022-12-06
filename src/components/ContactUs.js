import { BsTelegram } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';



export default function ContactUs() {

const newWindow = () => {
    window.open('https://t.me/odatt', '_blank');
}

const waNewWindow = () => {
    window.open('https://wa.me/962777844696', '_blank');
}


    return (
        <div className='contact-us'>
            <div className='contact-us-content'>
                <h2 className="contact-us-title"> تواصل معنا </h2>
                <p className="contact-us-subtitle"> إذا كان لديك تسريبات، ملخصات، أو أي شيء يساعد الطلاب يرجى إرساله </p>
                <div className='telegram-send' onClick={newWindow}>
                    {/* if the user clicks on this div, open the link in a new tab */}
                    <BsTelegram className='telegram-icon' size='50px' />
                    <p>إرسال عبر التلغرام</p>
                </div>
                <p className="contact-us-subtitle">وإذا احتجت لمساعدة في اللغة الإنجليزية، الفيزياء، الرياضيات، أو البرمجة، أو للاقراحات تواصل معنا</p>
                <div className='telegram-send'>
                    <IoLogoWhatsapp className='telegram-icon' size='50px' onClick={waNewWindow}/>
                    <BsTelegram className='telegram-icon' size='50px' onClick={newWindow} />

                </div>
            </div>
        </div>
    )

}