import "./Header.scss"
import Logo from "../../image/Logo.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="header__nav">
          <a className="header__link"  href='/'>
            <img src={Logo} className="header__logo" alt="logo"/>
          </a>
          <a className="header__link"  href='/'>Home </a>
          <a className="header__link"  href='/'>About </a>
          <a className="header__link"  href='/'>Services </a>
          <a className="header__link"  href='/'>FAQ </a>
          <a className="header__link"  href='/'>Contact Us </a>
        </nav>

        <button className="header__button accent-button">Заказать <span>услугу</span></button>
      
      </div>
    </header>
  )
}

export default Header;