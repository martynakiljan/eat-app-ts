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
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FilterContext } from "../../context/FilterContext";
import { SortAndSearch } from "../../types/sortAndSearch";
import { chineseKitchen } from "../../kitchenData/ChineseKitchen/ChineseKitchen";
import { italianKitchen } from "../../kitchenData/ItalianKitchen/ItalianKitchen";
import { fastFoodKitchen } from "../../kitchenData/FastFoodKitchen/FastFoodKitchen";
import { PaginationProvider } from "../../context/PaginationContext";
import { useLocation } from "react-router-dom";
import { Tile } from "../../types/tile";

const Home = () => {
  const location = useLocation();
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

  const currentKitchen = chineseKitchen.concat(italianKitchen, fastFoodKitchen);
  currentKitchen.sort(() => Math.random() - 0.5);
  let filteredFood: Tile[] = [];

  switch (location.pathname) {
    case "/all-food":
      filteredFood = currentKitchen;
      console.log(filteredFood);
      break;
    case "/chinese-food":
      filteredFood = chineseKitchen;
      console.log(filteredFood);
      break;
    case "/italian-food":
      filteredFood = italianKitchen;
      console.log(filteredFood);
      break;
    case "/fast-food":
      filteredFood = fastFoodKitchen;
      console.log(filteredFood);
      break;
    default:
      filteredFood = [];
  }

  // all food as filtered food //

  return (
    <FilterContext.Provider
      value={
        {
          sortValue,
          searchQuery,
          handleChangeSort,
          setSearchQuery,
          filteredFood,
        } as SortAndSearch
      }
    >
      <PaginationProvider>
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
            <Route
              path="/all-food"
              element={<AllFood kitchen={filteredFood} />}
            />
            <Route
              path="chinese-food"
              element={<ChineseFood kitchen={chineseKitchen} />}
            />
            <Route
              path="italian-food"
              element={<ItalianFood kitchen={italianKitchen} />}
            />
            <Route
              path="fast-food"
              element={<FastFood kitchen={fastFoodKitchen} />}
            />
          </Routes>
        </div>
      </PaginationProvider>
    </FilterContext.Provider>
  );
};

export default Home;
