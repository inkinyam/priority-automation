import './Statistic.scss';

const Statistic = () => {
  return (
    <section className='statistic'>
      <h2 className='statictic__title'>За 2 года мы</h2>

      <div className='statistic__cards'>
        <div className='statistic__card'>
          <h4 className='statistic__number'>Реализовали 1000+ часов аутстаффинга</h4>
          <p className='statistic__description'>Наши специалисты ежедневно занимаются удаленной поддержкой работы в 1С для различных компаний. Среднее время реагирования — 15 минут!. </p>
        </div>
        <div className='statistic__card'>
          <h4 className='statistic__number'>Осуществили 10+ внедрений</h4>
          <p className='statistic__description'>Мы помогаем нашим клиента перейти на новые версии ПО без потери наработанных данных и особенностей учета!</p>
        </div>
        <div className='statistic__card'>
          <h4 className='statistic__number'>Разобрали 50+ кейсов падения производительности</h4>
          <p className='statistic__description'>Вопросы, связанные с медленной работой 1С возникают у клиентов постоянно. Стараемся делать их работу комфортнее!</p>
        </div>
      </div>

    </section>
  )
}

export default Statistic;