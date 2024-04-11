/** @format */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavFood.scss";
import { SortAndSearch } from "../../types/sortAndSearch";
import { FilterContext } from "../../context/FilterContext";

const NavFood = () => {
  const { handleChangeSort, sortValue }: SortAndSearch =
    useContext(FilterContext);

  return (
    <ul className="navfood__list">
      <li className="navfood__link">
        <NavLink to="/AllFood">All</NavLink>
      </li>
      <li className="navfood__link">
        <NavLink to="/ChineseFood">Chinese</NavLink>
      </li>
      <li className="navfood__link">
        <NavLink to="/ItalianFood">Italian</NavLink>
      </li>
      <li className="navfood__link">
        <NavLink to="/FastFood">Fast food</NavLink>
      </li>
      <li className="navfood__link navfood__select-input">
        <label className="navfood__select-label">
          Sort by:
          <select
            className="navfood__select"
            value={sortValue}
            onChange={handleChangeSort}
          >
            <option value="priceUp">Sort by lowest price</option>
            <option value="priceDown">Sort by highest price</option>
          </select>
        </label>
      </li>
    </ul>
  );
};

export default NavFood;
