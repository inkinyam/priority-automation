import './About.scss';
import Loader from 'react-loaders';
import programmers from '../../assets/img/progr.jpg';
import sertificate from '../../assets/img/sert.svg';

const About = () => {
  return (
    <>
    <div className='container about'>
      <h1 className='title'><span>о</span> компании</h1>  

      <div className='about__info'>
        <div className='info__text'>
          <h2 className='about__title'>Мы — команда квалифицированных специалистов</h2>
          <p className='about__text'>Помогаем бизнесу с автоматизацией учетных процессов при помощи 1С</p>
          <p className='about__text'>Специализируемся на разработке с нуля и доработке уже существующих решений для торговых компаний. Занимаемся программированием, оптимизацией и сопровождением.</p>
        </div>
        <div className='about__sertifitates'>
          <img src={sertificate} alt='сертификаты' className='about__img'/>
          <p className='about__sertificates-info'>Наши сотрудники получили более 40 сертификатов 1C</p>
        </div>
      </div>
    

      
      <div className='statistic'>
        <img src={programmers} alt="фотка программиста" className="statistic__img"/> 
        <div className='statistic__info'>
          <h2 className='about__title'>За два года мы:</h2>

          <div className='statistic__card'>
            <h4 className='statistic__card-title'>Реализовали 1000+ часов аутстаффинга</h4>
            <p className='statistic__card-text'>Наши специалисты ежедневно занимаются удаленной поддержкой работы в 1С для различных компаний. Среднее время реагирования — 15 минут!</p>
          </div>

          <div className='statistic__card'>
            <h4 className='statistic__card-title'>Разобрали 50+ кейсов падения производительности</h4>
            <p className='statistic__card-text'>Вопросы, связанные с медленной работой 1С возникают у клиентов постоянно. Стараемся делать их работу комфортнее</p>
          </div>

          <div className='statistic__card'>
            <h4 className='statistic__card-title'>Осуществили 10+ внедрений</h4>
            <p className='statistic__card-text'>Мы помогаем нашим клиента перейти на новые версии ПО без потери наработанных данных и особенностей учета</p>
          </div>
        </div>
      </div>

     
    </div>
    <Loader type="ball-pulse"/>
    </>
  )
}

export default About;