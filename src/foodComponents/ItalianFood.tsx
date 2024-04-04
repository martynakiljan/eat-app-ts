/** @format */
import FoodTile from "./FoodTile";
import { useContext } from "react";
import React from "react";
import { FilterContext } from "../context/FilterContext";
import "../styles/all.scss";
import { ItalianKitchen } from "../kitchenData/ItalianKitchen/ItalianKitchen";
import { filterFunction } from "../utilis/filterFunction";
import NoFoodFound from "./NoFoodFoodFound";
import { TileTypes } from "../types/tileTypes";

const ItalianFood = () => {
  const { sortValue, searchQuery } = useContext(FilterContext);
  const filteredFood = filterFunction(ItalianKitchen, sortValue, searchQuery);

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

export default ItalianFood;
