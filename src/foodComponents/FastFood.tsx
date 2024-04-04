/** @format */

import FoodTile from "./FoodTile";
import React from "react";
import "../styles/all.scss";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { filterFunction } from "../utilis/filterFunction";
import { FastFoodKitchen } from "../kitchenData/FastFoodKitchen/FastFoodKitchen";
import NoFoodFound from "./NoFoodFoodFound";
import { TileTypes } from "../types/tileTypes";

const FastFood = () => {
  const { searchQuery, sortValue } = useContext(FilterContext);
  const filteredFood = filterFunction(FastFoodKitchen, sortValue, searchQuery);

  return (
    <>
      <div className="food-panel">
        {filteredFood.length !== 0 ? (
          filteredFood.map(
            ({ id, name, description, price, src }: TileTypes) => (
              <FoodTile
                id={id}
                key={id}
                name={name}
                description={description}
                price={price}
                src={src}
              />
            )
          )
        ) : (
          <NoFoodFound />
        )}
      </div>
    </>
  );
};

export default FastFood;
