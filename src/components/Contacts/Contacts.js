import './Contacts.scss';
import Loader from 'react-loaders';
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';
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

        <div className='Contacts__blocks'>
          
            <form className='form' ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='form__half'>
                  <input type='text' name='name' placeholder='Name' required/>
                </li>

                <li className='form__half'>
                  <input type='email' name='email' placeholder='E-mail' required/>
                </li>

                <li>
                  <input placeholder='Subject' type='text' name='subject' required/>
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>

                <li>
                  <input type='submit' className='button button_contact' value='Отправить' />
                </li>
              </ul>
            </form>
         
      

          <div className='map__description'>
            ООО "Приорити Автоматизация"
            <br />
            Россия, Москва
            <br />
            <span>mail@mail.ru</span>
          </div>

          <div className="map__wrapper">
              <MapContainer center={[55.754740, 37.621408]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[55.754740, 37.621408]}>
                  <Popup>ООО "Приорити Автоматизация"</Popup>
                </Marker>
              </MapContainer>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contacts;