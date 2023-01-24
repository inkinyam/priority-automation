import './Contacts.scss';
import Loader from 'react-loaders';
import React from 'react';
import emailjs from '@emailjs/browser';
import { useInputValidator } from '../../HOCs/useInputValidator';

const Contacts = () => {
  const inputControl = useInputValidator();
  const { name, email, subject, message } = inputControl.errors;
  const [isValid, setIsValid] = React.useState(false);
  const [messageText, setMessageText] = React.useState('');
  const [isMessageShow, setIsMessageShow] = React.useState(false);
  const refForm = React.useRef();

  React.useEffect(() => {
    setIsValid(inputControl.isValid)
  }, [ inputControl.isValid]);


  const sendEmail = (e) => {
    e.preventDefault()

    if (isValid) {
      emailjs
      .sendForm(
        'gmail',
        'template_9we80vd',
        refForm.current,
        '_JaCQQyUixzYhEE91'
      )
      .then(
        () => {
          setMessageText('Спасибо, мы получили Ваше сообщение о ответим Вам в ближайшее время');
          setIsMessageShow(true);
          window.location.reload(false);
        },
        () => {
          setMessageText('Что-то пошло не так, пожалуйста, попробуйте позднее снова');
          setIsMessageShow(true);
        }
      )

      setTimeout(()=> {
        setMessageText('');
        setIsMessageShow(false);
      }, 8000)
    }
    
  }

const buttonClassNames = isValid? 'button button_services': 'button button_disabled';

  return(
    <>
      <div className='container Contacts'>
        <h1 className='title'><span>К</span>онтакты</h1>  

        <div className='Contacts__contacts'>
          <div className='Contacts__contact'>
            <span className='card-text'>Телефон</span>
            <a href='tel:7-499-404-20-86' className='Contacts__link'>+7-499-404-20-86</a>
          </div>

          <div className='Contacts__contact'>
            <span className='card-text'>E-mail</span>
            <a href='mailto:info@p-automation.ru' className='Contacts__link '>info@p-automation.ru</a>
          </div>

        </div>
        <form className='form' ref={refForm} onSubmit={sendEmail} noValidate >
          <div className='form__line'>
            <fieldset className='form__fieldset'>
                <span className='form__text'>Имя</span>
                <label htmlFor='name' className='form__label'> 
                  <input className={`form__input ${inputControl?.errors?.name && "form__input_error"}`}
                        placeholder = "Ваше имя"
                        type        = "text"
                        minLength   = "2" 
                        maxLength   = "100" 
                        required 
                        pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                        value       = {inputControl?.values?.name || ''}
                        onChange    = {inputControl.handleChange}
                        name        = "name"
                        id          = "name"/>
                  <span className={`form__err ${inputControl?.errors?.name && "form__err_show"}`}>{name}</span>
                </label>
              </fieldset>

              <fieldset className='form__fieldset'>
                <span className='form__text'>E-mail</span>
                <label htmlFor='email' className='form__label'> 
                  <input className={`form__input ${inputControl?.errors?.email && "form__input_error"}`}
                        placeholder = "mail@yandex.ru"
                        type        = "text"
                        minLength   = "2" 
                        maxLength   = "100" 
                        required 
                        pattern     =  "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                        value       = {inputControl?.values?.email || ''}
                        onChange    = {inputControl.handleChange}
                        name        = "email"
                        id          = "email"/>
                  <span className={`form__err ${inputControl?.errors?.email && "form__err_show"}`}>{email}</span>
                </label>
              </fieldset>
            </div>
        

            <fieldset className='form__fieldset'>
              <span className='form__text'>Тема Вашего обращения</span>
              <label htmlFor='subject' className='form__label'> 
                <input className={`form__input ${inputControl?.errors?.subject && "form__input_error"}`}
                      placeholder = "Тема сообщения"
                      type        = "text"
                      minLength   = "2" 
                      maxLength   = "100" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                      value       = {inputControl?.values?.subject || ''}
                      onChange    = {inputControl.handleChange}
                      name        = "subject"
                      id          = "subject"/>
                <span className={`form__err ${inputControl?.errors?.subject && "form__err_show"}`}>{subject}</span>
              </label>
            </fieldset>

            <fieldset className='form__fieldset'>
              <span className='form__text'>Ваше сообщение</span>
              <label htmlFor='message' className='form__label'> 
                <textarea className={`form__input form__area ${inputControl?.errors?.message && "form__input_error"}`}
                      placeholder = "Напишите Ваше сообщение"
                      type        = "text"
                      minLength   = "2" 
                      maxLength   = "255" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                      value       = {inputControl?.values?.message || ''}
                      onChange    = {inputControl.handleChange}
                      name        = "message"
                      id          = "message"/>
                <span className={`form__err ${inputControl?.errors?.message && "form__err_show"}`}>{message}</span>
              </label>
            </fieldset>

            <button type='submit' className={buttonClassNames}>Отправить</button>

            <p className={`form__message  ${isMessageShow && 'form__message_show'}`}>{messageText}</p>
          </form>


      </div>
      <Loader type="ball-pulse"/>
    </>
  )
}

export default Contacts;