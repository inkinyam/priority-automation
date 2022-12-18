import './Feautures.scss';
import feauturesImg from "../../image/feauturesimg.jpg"
import { Link } from 'react-scroll';

const Feautures = () => {
  return (
    <section className='feautures'>
      <img src={feauturesImg} alt="img" className='feautures__img'/>

      <div className='feautures__cards'>
        <div className='feautures__card'>
          <h3 className='feutures__title'>Автоматизация учета</h3>
          <p className='feutures__desciption'>Мы поможем провести обследование вашего учета, сформируем предложения по его автоматизации и реализуем их на базе вашей учетной системы 1С</p>
          <Link to='form' smooth='true' className='featutures__more'>Заказать</Link>
        </div>

        <div className='feautures__card'>
          <h3 className='feutures__title'>IT аутсорсинг. Абонентское обслуживание</h3>
          <p className='feutures__desciption'>Заключим договор на абонентское обслуживание, проведем аудит состояния системы, закрепим за компанией ответственного специалиста, который поможет решать текущие проблемы.</p>
          <Link to='form' smooth='true' className='featutures__more'>Заказать</Link>
        </div>

        <div className='feautures__card'>
          <h3 className='feutures__title'>Оптимизация производительности</h3>
          <p className='feutures__desciption'>Оценим узкие места вашей 1С, сформулируем способы оптимизации, ускорим работу программы. </p>
          <Link to='form' smooth='true' className='featutures__more'>Заказать</Link>
        </div>

        <div className='feautures__card'>
          <h3 className='feutures__title'>Проектные решения</h3>
          <p className='feutures__desciption'>Подберем для вашей компании типовое решение 1С, которое максимально отвечает потребностям, поможем его внедрить и ввести в эксплуатацию. </p>
          <Link to='form' smooth='true' className='featutures__more'>Заказать</Link>
        </div>
      </div>
    </section>
  )
}


export default Feautures;