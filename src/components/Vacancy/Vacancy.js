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
          <p className='card-title vacancy__description'>{decription}</p>
        </div>

        <div className='vacancy__part'>
          <div className='vacancy__partLine'>
            <span className='card-text'>Зарплата</span>
            <p className='card-title '>{price}</p>
          </div>
          <div className='vacancy__partLine'>
            <span className='card-text'>Требуемый опыт</span>
            <p className='card-title'>{expirience}</p>
          </div>
          <div className='vacancy__partLine'>
            <span className='card-text'>Местоположение</span>
            <p className='card-title'>{workpoint}</p>
          </div>
          <div className='vacancy__partLine'>
            <span className='card-text'>Полный рабочий день</span>
            <p className='card-title'>{workday}</p>
          </div>
        </div>
      </div>

      <div className='vacancy__blocks'>
        <div className='vacancy__block'>
          <h3 className='block-title vacancy__block-title'>Вам предстоит</h3>
          <ul className='vacancy__list'>
            {todo.map(item => {
              return(
                <li className='vacancy__listItem card-title' key={item}>{item}</li>
              )
            })}
          </ul>
        </div> 

        <div className='vacancy__block'>
          <h3 className='block-title vacancy__block-title'>Для нас важно</h3>
          <ul className='vacancy__list'>
            {important.map(item => {
              return(
                <li className='vacancy__listItem card-title' key={item}>{item}</li>
              )
            })}
          </ul>
        </div>

        <div className='vacancy__block'>
          <h3 className='block-title vacancy__block-title'>Мы предлагаем</h3>
          <ul className='vacancy__list'>
            {offer.map(item => {
              return(
                <li className='vacancy__listItem card-title' key={item}>{item}</li>
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