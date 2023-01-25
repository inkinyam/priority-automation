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
          <h4 className='card-title '>1С-разработчик, junior</h4>
          <p className='card-text '>Мы ищем начинающего программиста 1С с коммерческим опытом работы от года. Опыт поддержки пользователей приветствуется.</p>
          <Link to='/consultant' className='link career__link'>Узнать подробнее</Link>
        </li>
        <li className='card career__card'>
          <h4 className='card-title '>1С-разработчик, middle+</h4>
          <p className='card-text '>Разыскиваем классного специалиста с серьезным опытом, способного усилить нашу команду.</p>
          <Link to='/architector' className='link career__link'>Узнать подробнее</Link>
        </li>
      </ul>
      </div>
      <Loader type="ball-pulse"/>
    </>
  )
}

export default Career;