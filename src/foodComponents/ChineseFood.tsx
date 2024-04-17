/** @format */
import FoodTile from "./FoodTile";
import "../styles/all.scss";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { filterFunction } from "../utilis/filterFunction";
import NoFoodFound from "./NoFoodFoodFound";
import { Tile } from "../types/tile.tsx";

const ChineseFood = ({ kitchen }: { kitchen: Tile[] }) => {
  const { sortValue, searchQuery } = useContext(FilterContext);
  const filteredFood = filterFunction(kitchen, sortValue, searchQuery);

  return (
    <>
      <div className="food-panel">
        {filteredFood.length !== 0 ? (
          filteredFood.map(({ id, name, description, price, src }: Tile) => (
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
