import './Services.scss';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import feauturesImg from '../../assets/img/feauturesimg.jpg'

const Services = () => {
  return (
    <>
      <div className='container services'>
        <h1 className='title'><span>у</span>слуги</h1>  

        <section className='services'>
          <img src={feauturesImg} alt="img" className='services__img'/>

          <div className='services__cards'>
            <div className='services__card'>
              <h3 className='services__title'>Автоматизация учета</h3>
              <p className='services__desciption'>Мы поможем провести обследование вашего учета, сформируем предложения по его автоматизации и реализуем их на базе вашей учетной системы 1С</p>
              <Link to='/contact'  className='services__more'>Заказать</Link>
            </div>

            <div className='services__card'>
              <h3 className='services__title'>IT аутсорсинг. Абонентское обслуживание</h3>
              <p className='services__desciption'>Заключим договор на абонентское обслуживание, проведем аудит состояния системы, закрепим за компанией ответственного специалиста, который поможет решать текущие проблемы.</p>
              <Link to='/contact' className='services__more'>Заказать</Link>
            </div>

            <div className='services__card'>
              <h3 className='services__title'>Оптимизация производительности</h3>
              <p className='services__desciption'>Оценим узкие места вашей 1С, сформулируем способы оптимизации, ускорим работу программы. </p>
              <Link to='/contact'  className='services__more'>Заказать</Link>
            </div>

            <div className='services__card'>
              <h3 className='services__title'>Проектные решения</h3>
              <p className='services__desciption'>Подберем для вашей компании типовое решение 1С, которое максимально отвечает потребностям, поможем его внедрить и ввести в эксплуатацию. </p>
              <Link to='/contact'  className='services__more'>Заказать</Link>
            </div>
          </div>
        </section>
      </div>
      <Loader type="ball-pulse"/>
    </>
  )
}

export default Services;