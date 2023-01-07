import UniNames from '../data/UniversitiesList.json'
import { Link } from "react-router-dom";

export default function Subjects() {
    const uni = localStorage.getItem('university');
    
    return (
        <div className='subjects-container'>
            <div className='subjects-content'>
                <h2 className='universities-title'> اختر المادة </h2>
                <div className='subjects-list'>
                    <div className='subjects'>
                        {UniNames.subjects.map((subject, index) => {
                            return ( 
                                <Link to={`/universities/subjects/${subject.route}`} key={subject.id} className='subject'>
                               <img src={subject.logo} alt='KAU' width='90px' height='85px'  />
                                <p> {subject.name} </p>
                            </Link>
                            )

                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}