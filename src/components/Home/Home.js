import { Link } from 'react-router-dom';
import './Home.scss';
import Loader from 'react-loaders';

const Home = () => {
  return (
    <>
      <div className='container home'>
        <h1 className='home__title'>
          Приорити
          <span>Автоматизация</span>  
        </h1> 
        <p className='home__subtitle'>Автоматизация эффективных операций увеличивает эффективность, автоматизация неэффективных операций увеличивает неэффективность.</p>

        <div className='home__buttons'>
          <Link to='/contact' className='button button_contact'>Связаться</Link>
          <Link to='/services' className='button button_services'>Список услуг</Link>
        </div>

        <img src='https://statec.com.ua/images/statec/vacancy.jpg' alt='изображение компьютера' className='home__img'/>
      
      </div>
      <Loader type="ball-pulse"/>
     </>

  )
}

export default Home;