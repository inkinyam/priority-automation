import './Contacts.scss';
import Loader from 'react-loaders';
import React from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const refForm = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_xqkeame',
        refForm.current,
        '_JaCQQyUixzYhEE91'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return(
    <>
      <div className='container Contacts'>
        <h1 className='title'><span>К</span>онтакты</h1>  

        <div className='Contacts__contacts'>
          <div className='Contacts__contact'>
            <span className='card-text'>Телефон</span>
            <a href='tel:7-499-404-20-86' className='card-title'>+7-499-404-20-86</a>
          </div>

          <div className='Contacts__contact'>
            <span className='card-text'>E-mail</span>
            <a href='mailto:info@p-automation.ru' className='card-title'>info@p-automation.ru</a>
          </div>

        </div>
        <form className='form' ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='form__half'>
                <input type='text' name='name' placeholder='Имя' required/>
              </li>

              <li className='form__half'>
                <input type='email' name='email' placeholder='E-mail' required/>
              </li>

              <li>
                <input placeholder='Заголовок' type='text' name='subject' required/>
              </li>
              <li>
                <textarea placeholder="Ваше сообщение" name="message" required></textarea>
              </li>

              <li>
                <input type='submit' className='button button_contact' value='Отправить' />
              </li>
            </ul>
          </form>


      </div>
      <Loader type="ball-pulse"/>
    </>
  )
}

export default Contacts;