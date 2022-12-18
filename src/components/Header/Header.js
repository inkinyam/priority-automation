import "./Header.scss"
import Logo from "../../image/Logo.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
      <a className="header__logo"  href='/'>
            <img src={Logo}  alt="logo"/>
      </a>
      <nav className="header__nav">
        <a href='aboutUs'   smooth="true" className="header__link" >О компании </a>
        <a href='feautures' smooth="true" className="header__link">Услуги </a>
        <a href='/works'    smooth="true" className="header__link" >Разработки </a>
        <a href='/career'   smooth="true" className="header__link" >Вакансии </a>
        <a href='form'      smooth="true" className="header__link" >Контакты </a>
      </nav>

      
      </div>
    </header>
  )
}

export default Header;