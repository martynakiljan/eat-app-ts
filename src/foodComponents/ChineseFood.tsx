/** @format */
import FoodTile from "./FoodTile";
import "../styles/all.scss";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { filterFunction } from "../utilis/filterFunction";
import { ChineseKitchen } from "../kitchenData/ChineseKitchen/ChineseKitchen";
import NoFoodFound from "./NoFoodFoodFound";
import { TileTypes } from "../types/tileTypes";

const ChineseFood = () => {
  const { sortValue, searchQuery } = useContext(FilterContext);
  const filteredFood = filterFunction(ChineseKitchen, sortValue, searchQuery);

  return (
    <>
      <div className="food-panel">
        {filteredFood.length !== 0 ? (
          filteredFood.map(({ id, name, description, price, src } :TileTypes) => (
            <FoodTile
              id={id}
              key={id}
              name={name}
              description={description}
              price={price}
              src={src}
            />
          ))
        ) : (
          <NoFoodFound />
        )}
      </div>
    </>
  );
};

export default ChineseFood;
