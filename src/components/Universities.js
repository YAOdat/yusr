import UniNames from '../data/UniversitiesList.json'
import { Link } from "react-router-dom";

export default function Universities() {

    function handleClick(event, uni) {
        localStorage.setItem('university', uni.name);
        window.location.assign('/universities/subjects');
      }
      
    return (
        <div className='uni-container'>
            <div className='universities-content'>
                <h2 className='universities-title'> اختر الجامعة </h2>
                <div className='universities-list'>
                        {UniNames.unis.map((uni, index) => {
                            return ( 
                            <button to={'/universities/subjects'} className='university' key={uni.id} onClick={(event) => handleClick(event, uni)}
                            > 
                                <img src={uni.logo} alt='KAU' width='90px' height='85px'  />
                                <p className='uni-name'> {uni.name} </p>
                            </button>
                            )

                        })}
                </div>
            </div>
            
        </div>
    )
}
