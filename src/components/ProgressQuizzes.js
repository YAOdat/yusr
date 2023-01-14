import UniNames from '../data/UniversitiesList.json'


export default function ProgressQuizzes(props) {
    if ( UniNames.data[props.level - 1] && UniNames.data[props.level - 1].quizzes){
        if(Array.isArray(UniNames.data[props.level - 1].quizzes) && UniNames.data[props.level - 1].quizzes.length > 0) {
            UniNames.data[props.level - 1].quizzes.reverse();
        }
    }
    
      
    return (
        <div>
            <h1>حلول اختبارات التقدم في المستوى</h1>
            <div className='progress-quizzes'>
                {props.branch === "علمي" ? (
                    UniNames.data[props.level - 1].quizzes.map((unit, index) => {
                        if (unit.listening !== "") {
                            return (
                                <div className='progress-quizzes-unit' key={index}>
                                    <a href={unit.listening} target="_blank"> {unit.unit} </a>
                                </div>
                            );
                        }
                        return null;
                    })
                ) : (
                    <div className='no-data'>
                        <img src='https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png' width='75px' /> 
                        <h3>لا يوجد شيء لعرضه حتى الآن</h3>
                    </div>
                )}
            </div>
        </div>
    );



          
}