import UniNames from '../data/UniversitiesList.json'


export default function ProgressQuizzes(props) {
    UniNames.data[props.level - 1].quizzes.reverse();

      
    return (
        <div>
            <h1>حلول اختبارات التقدم في المستوى</h1>
            <div className='progress-quizzes'>
                {UniNames.data[props.level - 1].quizzes.map((unit, index) => {
                    return (
                        <div className='progress-quizzes-unit' key={index}>
                            <a href={unit.listening} target="_blank"> {unit.unit} </a>
                        
                   
                        </div>)}
                )}
            </div>
        </div>



            )
}