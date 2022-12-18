import "./Form.scss";
import { motion } from "framer-motion";
import React from "react";


const Form =() => {
  const [isOpen, setIsOpen] = React.useState(false)

  const variants = {
    open: { opacity: 1, y: 0, visibility: 'visible' },
    closed: { opacity: 0, y: "-30%" , visibility: 'hidden'},
  }

  const variantsIcon = {
    open: { rotate: 0},
    closed: { rotate: 180},
  }
  return (
    <section className="form-section">
      <form className="form">
        <fieldset className="form__titleblock">
          <div>
            <h2 className="form__title">Связаться с нами</h2>
            <p className="form__subtitle">Чем больше вы работаете, тем больше получаете</p>
          </div>
          <button type="submit" className="form__submit accent-button">Отправить</button>
        </fieldset>

        <fieldset className="form__info">
          <div className="form__leftpart">
            <div className="form__select">
              <div className="form__select-trigger" onClick={()=> {setIsOpen(!isOpen)}}>
                <span>Выберите тему</span> 
                <motion.svg className="form__selecticon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            animate={isOpen ? "open" : "closed"}
                            variants={variantsIcon}
                            transition= {{duration: 0.2}}>
                 <polyline points="0,20 10,0 20,20" fill="none" stroke="black" />
                </motion.svg>
              </div>
              <motion.ul className="form__select-items"
                           animate={isOpen ? "open" : "closed"}
                           variants={variants}>
                  <li className="form__select-item">Заказать услугу</li>
                  <li className="form__select-item">Сотрудничество</li>
                  <li className="form__select-item">Реклама</li>
                  <li className="form__select-item">Задать вопрос</li>
              </motion.ul>
            </div>

            <input className="form__input" 
                  placeholder="Ваше имя" 
                  type='text'/>
            <input className="form__input" 
                  placeholder="Ваш e-mail" 
                  type='email'/>
          </div>
          <textarea className="form__textarea"
                    placeholder="Напишите Ваше предложение" />
        </fieldset>
      </form>

    </section>
  )
}

export default Form;