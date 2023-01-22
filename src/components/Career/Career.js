import './Career.scss';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <>
      <div className='container career'>
      <h1 className='title'><span>В</span>акансии</h1>  

      <ul className='career__cardlist'>
        <li className='card career__card'>
          <h4 className='card-title '>1С-консультант</h4>
          <p className='card-text '>Мы ищем специалиста с опытом работы в качестве консультанта или специалиста по сопровождению 1С и поддержки пользователей от 2 лет.</p>
          <Link to='/consultant' className='link career__link'>Узнать подробнее</Link>
        </li>
        <li className='card career__card'>
          <h4 className='card-title '>1С-архитектор</h4>
          <p className='card-text '>Архитектор в нашей команде – незаменимый специалист при создании или аудите сложных IT-решений. Его задачи – заложить фундамент проекта, обеспечить гибкость и снизить риски, а в конечном итоге – обеспечить бизнесу быструю и качественную разработку.</p>
          <Link to='/architector' className='link career__link'>Узнать подробнее</Link>
        </li>
      </ul>
      </div>
      <Loader type="ball-pulse"/>
    </>
  )
}

export default Career;