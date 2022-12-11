import './Statistic.scss';

const Statistic = () => {
  return (
    <section className='statistic'>
      <h2 className='statictic__title'>За 2 года мы запустили</h2>

      <div className='statistic__cards'>
        <div className='statistic__card'>
          <h4 className='statistic__number'>200+</h4>
          <p className='statistic__description'> Возьмём, например, слово «мышка». Компьютерная мышь совсем не то же самое, что маленький грызун, который живёт в зданиях и полях.</p>
        </div>
        <div className='statistic__card'>
          <h4 className='statistic__number'>200+</h4>
          <p className='statistic__description'>  Это небольшой прибор, который вы двигаете туда-сюда по плоской поверхности, сидя за компьютером. Мышь перемещает стрелку (или курсор) на экране компьютера.</p>
        </div>
        <div className='statistic__card'>
          <h4 className='statistic__number'>200+</h4>
          <p className='statistic__description'> Идея такого устройства пришла в голову специалисту по компьютерам Дугласу Энгельбарту в начале 60-х годов XX века. </p>
        </div>
      </div>

    </section>
  )
}

export default Statistic;