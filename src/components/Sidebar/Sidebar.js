import "./Sidebar.scss";
import Logo from '../../assets/img/logo.png';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faCircleInfo, faCircleDollarToSlot, faLaptop, faUserTie} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const navLinkClassnames =  ({isActive}) => isActive ? 'navbar__link navbar__link_active': 'navbar__link';

  return (
  <div className="navbar">
    <Link className="navbar__logo" to ='/'>
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

  </div>
  )
}

export default Sidebar;