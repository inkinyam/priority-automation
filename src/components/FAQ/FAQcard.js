import './FAQ.scss';
import { motion } from 'framer-motion';
import React from 'react';

const FAQcard = ({data}) => {
  const [isOpen, setisOpen] = React.useState(false);

  const variantsContent = {
    open: { opacity: 1,  height: 'auto'},
    closed: { opacity: 0, height: 0},
  }

  const variantsIcon = {
    open: { rotate: 0},
    closed: { rotate: 45},
  }

  const itemClassname = isOpen? 'accordion__item accordion__item_opened':'accordion__item';
  return (
      <motion.div className={itemClassname}>
        <div className='accordion__trigger' onClick={() => {setisOpen(!isOpen)}}>
          <h4 className='accorfion__title'>{data.question} </h4>
          <motion.div className="accordion__icon" 
                      animate={isOpen ? "open" : "closed"}
                      variants={variantsIcon}
                      transition= {{duration: 0.2}}>
            <span className='line'></span>
            <span className='line'></span>
          </motion.div>
        </div>
        <motion.div className='accorion__content'
                     animate={isOpen ? "open" : "closed"}
                     variants={variantsContent}>
          <p>
            {data.answer}
          </p>
        </motion.div>
      </motion.div>
  )
}


export default FAQcard;