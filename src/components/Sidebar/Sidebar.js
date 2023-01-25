import "./Sidebar.scss";
import Logo from '../../assets/img/logo.png';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faCircleInfo, faCircleDollarToSlot, faLaptop, faUserTie} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Sidebar = () => {
  const navLinkClassnames =  ({isActive}) => isActive ? 'navbar__link navbar__link_active': 'navbar__link';
  const [isNavBarOpen, setIsNavBarOpen] = React.useState(false);

  const burgerClassName = isNavBarOpen? 'navbar__burger navbar__burger_open' : 'navbar__burger';
  const mobileNavClassName = isNavBarOpen? 'navbar__mobilenav navbar__mobilenav_open' : 'navbar__mobilenav';

  return (
  <div className="navbar">
    <Link className="navbar__logo" to ='/' onClick={()=>{setIsNavBarOpen(false)}}>
      <img src={Logo} alt ='logo'/>
    </Link>

    <nav className="navbar__navigation">
      <NavLink exact="true" className={navLinkClassnames} to="/" dataname="домой">
        <FontAwesomeIcon icon={faHome} color='#95A1BB' />
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/about" dataname="о нас">
        <FontAwesomeIcon icon={faCircleInfo} color='#95A1BB' />
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/services" dataname="услуги">
        <FontAwesomeIcon icon={faCircleDollarToSlot} color='#95A1BB' />
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/works" dataname="разработки">
        <FontAwesomeIcon icon={faLaptop} color='#95A1BB' />
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/career" dataname="вакансии">
        <FontAwesomeIcon icon={faUserTie} color='#95A1BB' />
      </NavLink>
      
      <NavLink exact="true" className={navLinkClassnames} to="/contact" dataname="контакты">
        <FontAwesomeIcon icon={faEnvelope} color='#95A1BB' />
      </NavLink>
    </nav>

    <ul className="navbar__links">
      <li>
          г. Москва
      </li>
      <li>
        2023 г.
      </li>
    </ul>

    <div className={mobileNavClassName}>
      <NavLink exact="true" className={navLinkClassnames} to="/" onClick={()=>{setIsNavBarOpen(!isNavBarOpen)}}>
        <FontAwesomeIcon icon={faHome} color='#95A1BB' />
         Домой
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/about"  onClick={()=>{setIsNavBarOpen(!isNavBarOpen)}}>
        <FontAwesomeIcon icon={faCircleInfo} color='#95A1BB' />
        О нас
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/services"  onClick={()=>{setIsNavBarOpen(!isNavBarOpen)}}>
        <FontAwesomeIcon icon={faCircleDollarToSlot} color='#95A1BB' />
        Услуги
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/works" onClick={()=>{setIsNavBarOpen(!isNavBarOpen)}} >
        <FontAwesomeIcon icon={faLaptop} color='#95A1BB' />
        Наши разработки
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/career"  onClick={()=>{setIsNavBarOpen(!isNavBarOpen)}}>
        <FontAwesomeIcon icon={faUserTie} color='#95A1BB' />
        Вакансии
      </NavLink>
      
      <NavLink exact="true" className={navLinkClassnames} to="/contact"  onClick={()=>{setIsNavBarOpen(!isNavBarOpen)}}>
        <FontAwesomeIcon icon={faEnvelope} color='#95A1BB' />
        Контакты
      </NavLink>
    </div>

    <button className={burgerClassName} onClick={()=>{setIsNavBarOpen(!isNavBarOpen)}}>
      <span className="line"></span>
      <span className="line"></span>
    </button>

  </div>
  )
}

export default Sidebar;