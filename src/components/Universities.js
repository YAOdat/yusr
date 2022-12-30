import kauLogo from '../assets/KAU.png'
import UniNames from '../data/UniversitiesList.json'
import Footer from './Footer';
import { Link } from "react-router-dom";

export default function Universities() {
    return (
        <div className='uni-container'>
            <div className='universities-content'>
                <h2 className='universities-title'> اختر الجامعة </h2>
                <div className='universities-list'>
                        {UniNames.unis.map((uni, index) => {
                            return ( 
                            <Link to={'/universities/subjects'} className='university' key={uni.id}> 
                                <img src={uni.logo} alt='KAU' width='90px' height='85px'  />
                                <p className='uni-name'> {uni.name} </p>
                            </Link>
                            )

                        })}
                </div>
            </div>
            
        </div>
    )
}
