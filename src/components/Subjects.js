import UniNames from '../data/UniversitiesList.json'

export default function Subjects() {
    return (
        <div className='subjects-container'>
            <div className='subjects-content'>
                <h2 className='universities-title'> اختر المادة </h2>
                <div className='subjects-list'>
                    <div className='subjects'>
                        {UniNames.unis.map((uni, index) => {
                            return ( 
                            <div  key={uni.id} className='subject'>
                                <p> {uni.name} </p>
                            </div>
                            )

                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}