import "./Lead.scss";
import leadimg from '../../image/laedimg.jpg';

const Lead = () => {
  return (
    <section className="lead">
      <h1 className="lead__title">
        PRIORITY
        <span>
          Автоматизация 1с
        </span>
      </h1>

      <div className="lead__buttons">
        <button className="accent-button">Связаться</button>
        <button className="secondary-button">Список услуг</button>
      </div>
      <img src={leadimg} alt="img" className="lead__img"/>
    </section> 
  )
}

export default Lead;