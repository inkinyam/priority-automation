import './Footer.scss';

const Footer = () => {
  return (
  <footer className='footer'>
    <div className='footer__wrapper'>
      <ul className='footer__nav'>
        <li className='footer__item'><a href='/'>Цены</a></li>
        <li className='footer__item'><a href='/'>Блог</a></li>
        <li className='footer__item'><a href='/'>Вакансии</a></li>
        <li className='footer__item'><a href='/'>Обновления</a></li>
      </ul>

      <p className='footer__copyright'>i_n_k_i © 2022.</p>
    </div>
  </footer>)
}

export default Footer;