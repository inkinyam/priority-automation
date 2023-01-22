import './Career.scss';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <>
      <div className='container career'>
      <h1 className='title'><span>В</span>акансии</h1>  

      <ul className='career__cardlist'>
        <li className='career__card'>
          <h4 className='career__card-title'>1С-консультант</h4>
          <p className='career__card-description'>Мы ищем специалиста с опытом работы в качестве консультанта или специалиста по сопровождению 1С и поддержки пользователей от 2 лет.</p>
          <Link to='/consultant' className='career__more'>Узнать подробнее</Link>
        </li>
        <li className='career__card'>
          <h4 className='career__card-title'>1С-архитектор</h4>
          <p className='career__card-description'>Архитектор в нашей команде – незаменимый специалист при создании или аудите сложных IT-решений. Его задачи – заложить фундамент проекта, обеспечить гибкость и снизить риски, а в конечном итоге – обеспечить бизнесу быструю и качественную разработку.</p>
          <Link to='/architector' className='career__more'>Узнать подробнее</Link>
        </li>
      </ul>
      </div>
      <Loader type="ball-pulse"/>
    </>
  )
}

export default Career;