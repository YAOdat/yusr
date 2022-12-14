import { useState, useEffect } from 'react'
import UniNames from '../data/UniversitiesList.json'
import swal from 'sweetalert';
import ProgressQuizzes from './ProgressQuizzes';


export default function English() {
  const uni = localStorage.getItem('university');
  const [branch, setBranch] = useState('');
  const [level, setLevel] = useState(0);
  const [link, setLink] = useState('');
  const [show, setShow] = useState(false);

  const handleRadioClick = (event) => {
    setBranch(event.target.value);
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (branch === '') return swal({
      text: 'يحب اختيار الفرع الدرسي أولًا (العلمي أو الأدبي)',
      buttons: {
        confirm: {
          text: 'حسنًا',
          visible: true,
          className: "alert-button",
          closeModal: true
        }
      }
    });

    setLevel(event.target.value);
  }

  const getBooks = () => {
    if (branch === 'علمي') {
      setLink(UniNames.data[level - 1].books)
    }
    window.open(link, '_blank');

  }

  const getNotes = () => {
    if (branch === 'علمي') {
      setLink(UniNames.data[level - 1].notes)
    }
    window.open(link, '_blank');
  }

  const showProgressQuizzes = () => {
    setShow(!show);
  }


  useEffect(() => {
    if (level !== 0) setLink(UniNames.data[level - 1].books)
  }, [branch, level]);

  return (
    <div className='english'>
      <form className='english-from'>
        <h1>اللغة الإنجليزية</h1>
        <label htmlFor="radio-1">علمي</label>
        <input type="radio" name="radio-input" id="radio-2" value="أدبي" onClick={handleRadioClick} />
        <label htmlFor="radio-2">أدبي</label>
        <input type="radio" name="radio-input" id="radio-1" value="علمي" onClick={handleRadioClick} />

        <div className='level-buttons'>
          <button onClick={handleButtonClick} value={1}> Level 1 المستوى الأول</button>
          <button onClick={handleButtonClick} value={2}> Level 2 المستوى الثاني</button>
          <button onClick={handleButtonClick} value={3}> Level 3 المستوى الثالث</button>
        </div>
      </form>
      {level !== 0 && branch !== '' &&
      <> 
      <h3> المستوى: {level} | التخصص: {branch}</h3>
        <div className='english-content'>
          <a onClick={getBooks} > 
          <img src='https://i.ibb.co/Rg9wwDS/books.png' width='50px' />
          <p>الكتب</p>
          </a>
          <a onClick={getNotes} > 
          <img src='https://i.ibb.co/5GCgpNy/notepad.png' width='60px'/>
          <p>ملخصات</p>
           </a>
          <a onClick={showProgressQuizzes}> 
          <img src='https://i.ibb.co/86GHWLw/stars.png' width='60px' />
          <p> حلول اختبارت التقدم </p>
         </a>

          <a> 
          <img src='https://i.ibb.co/m4DMVf0/leaks.png' width='50px' />
          <p>تسريبات</p>
             </a>
        </div>
        </>
      }

      {show && <ProgressQuizzes level={level} branch={branch} />}
    </div>
  )
}
