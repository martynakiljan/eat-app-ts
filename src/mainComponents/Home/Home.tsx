/** @format */
import "./Home.scss";
import React from "react";
import { useState } from "react";
import NavFood from "../NavFood/NavFood";
import AllFood from "../../foodComponents/AllFood";
import ChineseFood from "../../foodComponents/ChineseFood";
import FastFood from "../../foodComponents/FastFood";
import ItalianFood from "../../foodComponents/ItalianFood";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Order from "../Order/Order";
import { useBasket } from "../../context/BasketContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FilterContext } from "../../context/FilterContext";
import { SortAndSearchTypes } from "../../types/sortAndSearchTypes";

const Home = () => {
  const { handleOpen, totalPrice } = useBasket();

  // search //
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();

    if (inputValue !== "") {
      setSearchQuery(inputValue);
    }
    setSearchQuery(inputValue);
  };

  //sort//

  const [sortValue, setSortValue] = useState<string>("");

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortValue(value);
  };

  return (
    <FilterContext.Provider
      value={
        {
          sortValue,
          searchQuery,
          handleChangeSort,
        } as SortAndSearchTypes
      }
    >
      <header className="home__header">
        <div className="home__header--mask"></div>
        <div className="home__top">
          <h1 className="home__title">Are you hungry?</h1>
          <div className="home__input">
            <div className="home__input__icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              className="home__input--input"
              placeholder="Search food..."
              onChange={handleSearchChange}
            ></input>
          </div>
        </div>
      </header>

      <div className="navfood">
        <div className="home__panel">
          <div className="home__nav">
            <NavFood />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/AllFood" />} />
          <Route path="/AllFood" element={<AllFood />} />
          <Route path="ChineseFood" element={<ChineseFood />} />
          <Route path="ItalianFood" element={<ItalianFood />} />
          <Route path="FastFood" element={<FastFood />} />
        </Routes>
      </div>
    </FilterContext.Provider>
  );
};

export default Home;
