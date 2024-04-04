/** @format */
import "../styles/all.scss";
import React from "react";
import { useContext } from "react";
import { ChineseKitchen } from "../kitchenData/ChineseKitchen/ChineseKitchen";
import { ItalianKitchen } from "../kitchenData/ItalianKitchen/ItalianKitchen";
import { FastFoodKitchen } from "../kitchenData/FastFoodKitchen/FastFoodKitchen";
import FoodTile from "./FoodTile";
import { v4 as uuidv4 } from "uuid";
import { FilterContext } from "../context/FilterContext";
import { filterFunction } from "../utilis/filterFunction";
import NoFoodFound from "./NoFoodFoodFound";
import { TileTypes } from "../types/tileTypes";

const AllFood: React.FC = () => {
  const { sortValue, searchQuery } = useContext(FilterContext);
  const allFood: TileTypes[] = ChineseKitchen.concat(
    ItalianKitchen,
    FastFoodKitchen
  );
  const filteredFood: TileTypes[] = filterFunction(
    allFood,
    sortValue,
    searchQuery
  );

  return (
    <>
      <div className="food-panel">
        {filteredFood.length !== 0 ? (
          filteredFood.map(
            ({ id, name, description, price, src }: TileTypes) => (
              <FoodTile
                id={id}
                name={name}
                description={description}
                price={price}
                src={src}
                key={uuidv4()}
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

export default AllFood;
