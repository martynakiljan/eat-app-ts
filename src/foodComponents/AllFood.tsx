/** @format */

import { useContext } from "react";
import FoodTile from "./FoodTile";
import { FilterContext } from "../context/FilterContext";
import { filterFunction } from "../utilis/filterFunction";
import NoFoodFound from "./NoFoodFoodFound";
import PaginationFood from "./PaginationFood";
import { Tile } from "../types/tile";
import { usePagination } from "../context/PaginationContext";

const AllFood = ({ kitchen }: { kitchen: Tile[] }) => {
  const { sortValue, searchQuery, filteredFood } = useContext(FilterContext);
  const { startIndex, endIndex, isDesktop } = usePagination();

  console.log(kitchen);
  const allFood = filterFunction(
    filteredFood,
    sortValue,
    searchQuery,
    startIndex,
    endIndex
  );

  console.log("all food:");
  console.log(startIndex, endIndex);
  console.log(allFood);
  return (
    <div>
      <div className="food-panel">
        {allFood.length !== 0 ? (
          allFood.map(({ id, name, description, price, src }) => (
            <FoodTile
              key={id}
              id={id}
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
      {isDesktop && <PaginationFood />}
    </div>
  );
};

export default AllFood;
