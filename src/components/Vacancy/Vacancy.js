import './Vacancy.scss';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

import { offer  } from '../../assets/utils/vacancyData';

const Vacancy = ({title, price, decription,  todo, important, workpoint, expirience, workday}) => {
  return (
    <>
    <div className='container vacancy'>
    <h1 className='title'><span>{title.first}</span>{title.second}</h1>  

      <div className='vacancy__info'>
        <div className='vacancy__part'>
          <Link to='/contact' className='button button_contact'>Откликнуться</Link>
          <p className='vacancy__text vacancy__description'>{decription}</p>
        </div>

        <div className='vacancy__part'>
          <div className='vacancy__partLine'>
            <span className='vacancy__tag'>Зарплата</span>
            <p className='vacancy__accenttext '>{price}</p>
          </div>
          <div className='vacancy__partLine'>
            <span className='vacancy__tag'>Требуемый опыт</span>
            <p className='vacancy__accenttext'>{expirience}</p>
          </div>
          <div className='vacancy__partLine'>
            <span className='vacancy__tag'>Местоположение</span>
            <p className='vacancy__accenttext'>{workpoint}</p>
          </div>
          <div className='vacancy__partLine'>
            <span className='vacancy__tag'>Полный рабочий день</span>
            <p className='vacancy__accenttext'>{workday}</p>
          </div>
        </div>
      </div>

      <div className='vacancy__blocks'>
        <div className='vacancy__block'>
          <h3 className='vacancy__title'>Вам предстоит</h3>
          <ul className='vacancy__list'>
            {todo.map(item => {
              return(
                <li className='vacancy__listItem vacancy__text' key={item}>{item}</li>
              )
            })}
          </ul>
        </div> 

        <div className='vacancy__block'>
          <h3 className='vacancy__title'>Для нас важно</h3>
          <ul className='vacancy__list'>
            {important.map(item => {
              return(
                <li className='vacancy__listItem vacancy__text' key={item}>{item}</li>
              )
            })}
          </ul>
        </div>

        <div className='vacancy__block'>
          <h3 className='vacancy__title'>Мы предлагаем</h3>
          <ul className='vacancy__list'>
            {offer.map(item => {
              return(
                <li className='vacancy__listItem vacancy__text' key={item}>{item}</li>
              )
            })}
          </ul>
        </div>

        <Link to='/contact' className='button button_contact'>Оставьте ваши контакты</Link>
      </div>
      
      
    </div>
    <Loader type="ball-pulse"/>
    
    </>
  )
}

export default Vacancy;