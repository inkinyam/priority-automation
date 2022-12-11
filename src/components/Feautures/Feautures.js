import './Feautures.scss';
import feauturesImg from "../../image/feauturesimg.jpg"

const Feautures = () => {
  return (
    <section className='feautures'>
      <img src={feauturesImg} alt="img" className='feautures__img'/>

      <div className='feautures__cards'>
        <div className='feautures__card'>
          <h3 className='feutures__title'>Услуга 1</h3>
          <p className='feutures__desciption'>Использование компьютера требует специальных навыков. Людей, достигших в этом мастерства, иногда называют «хакерами».</p>
          <button className='featutures__readmore'>Читать еще</button>
        </div>

        <div className='feautures__card'>
          <h3 className='feutures__title'>Услуга 2</h3>
          <p className='feutures__desciption'>Обычно хакер – это человек, который создаёт программное обеспечение на специальном компьютерном языке. </p>
          <button className='featutures__readmore'>Читать еще</button>
        </div>

        <div className='feautures__card'>
          <h3 className='feutures__title'>Услуга 3</h3>
          <p className='feutures__desciption'>Но слово «хакер» также применимо к человеку, который пытается украсть информацию из компьютерных систем.</p>
          <button className='featutures__readmore'>Читать еще</button>
        </div>

        <div className='feautures__card'>
          <h3 className='feutures__title'>Услуга 4</h3>
          <p className='feutures__desciption'>Компьютерные технологии стали неотъемлемой частью жизни людей. Эти технологии имеют свои корни. </p>
          <button className='featutures__readmore'>Читать еще</button>
        </div>
      </div>
    </section>
  )
}


export default Feautures;