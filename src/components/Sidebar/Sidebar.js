import "./Sidebar.scss";
import Logo from '../../assets/img/Logo.svg';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faCircleInfo, faCircleDollarToSlot, faCopyright, faLaptop, faUserTie} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const navLinkClassnames =  ({isActive}) => isActive ? 'navbar__link navbar__link_active': 'navbar__link';

  return (
  <div className="navbar">
    <Link className="navbar__logo" to ='/'>
      <img src={Logo} alt ='logo'/>
    </Link>

    <nav className="navbar__navigation">
      <NavLink exact="true" className={navLinkClassnames} to="/" dataname="домой">
        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/about" dataname="о нас">
        <FontAwesomeIcon icon={faCircleInfo} color='#4d4d4e' />
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/services" dataname="услуги">
        <FontAwesomeIcon icon={faCircleDollarToSlot} color='#4d4d4e' />
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/works" dataname="разработки">
        <FontAwesomeIcon icon={faLaptop} color='#4d4d4e' />
      </NavLink>

      <NavLink exact="true" className={navLinkClassnames} to="/career" dataname="вакансии">
        <FontAwesomeIcon icon={faUserTie} color='#4d4d4e' />
      </NavLink>
      
      <NavLink exact="true" className={navLinkClassnames} to="/contact" dataname="контакты">
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
      </NavLink>
    </nav>

    <ul className="navbar__links">
      <li>
        <a href="https://github.com/inkinyam" target="_blank" rel="noreferrer"> 
          <FontAwesomeIcon icon={faCopyright} color='#4d4d4e'/>
          i_n_k_i
        </a>
      </li>
      <li>
        2022 г.
      </li>

    </ul>

  </div>
  )
}

export default Sidebar;