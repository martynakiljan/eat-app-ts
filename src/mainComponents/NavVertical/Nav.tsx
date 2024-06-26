/** @format */

import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Order from "../Order/Order";
import { useBasket } from "../../context/BasketContext";
import {
  faBowlFood,
  faUtensils,
  faQuestion,
  faHome,
  faCartShopping,
  faMessage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { handleOpen, totalPrice, basketLength } = useBasket();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="nav">
      <div className="nav__icons">
        <button className="nav__logo" onClick={reloadPage}>
          <FontAwesomeIcon className="icon" icon={faBowlFood} />
        </button>
        <NavLink to="/all-food" className="nav__item nav-item__home">
          <FontAwesomeIcon icon={faHome} />
          HOME
        </NavLink>

        <NavLink to="/coming-soon" className="nav__item nav-item__restaurant">
          <FontAwesomeIcon icon={faUtensils} />
          INFO
        </NavLink>
        <NavLink to="/help" className="nav__item nav-item__q&a">
          <FontAwesomeIcon icon={faQuestion} />
          Q&A
        </NavLink>
        <NavLink to="/contact" className="nav__item nav-item__q&a">
          <FontAwesomeIcon icon={faMessage} />
          CONTACT
        </NavLink>
        <NavLink to="/location" className="nav__item nav-item__location">
          <FontAwesomeIcon icon={faLocationDot} />
          LOCATION
        </NavLink>
      </div>
      <div className="shopping__basket">
        <button onClick={handleOpen} className="shopping__button">
          <FontAwesomeIcon icon={faCartShopping} />
          <p className="shopping__price">{totalPrice} CHF</p>
          <div className="shopping__piece">
            <p className="shopping__piece--piece">{basketLength}</p>
          </div>
        </button>
        <Order />
      </div>
    </div>
  );
};

export default Nav;
