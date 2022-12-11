import './FAQ.scss';
import {faqData} from '../../utils/faq-data.js'
import React from 'react';
import FAQcard from './FAQcard';


const FAQ = () => {


  return (
  <section className='faq'>
    <h2 className='faq__title'>FAQ</h2>

    <div className='accordion'>
     {faqData.map (card => {
        return (
          <FAQcard key = {card.id} 
                  data ={card}/>
        )
      })
     }
      
    </div>


  </section>)
}


export default FAQ;