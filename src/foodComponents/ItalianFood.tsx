/** @format */
import FoodTile from "./FoodTile";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import "../styles/all.scss";
import NoFoodFound from "./NoFoodFoodFound";
import { Tile } from "../types/tile.tsx";
import { filterFunction } from "../utilis/filterFunction";
import { usePagination } from "../context/PaginationContext";
import PaginationFood from "./PaginationFood.tsx";

const ItalianFood = ({ kitchen }: { kitchen: Tile[] }) => {
  const { sortValue, searchQuery } = useContext(FilterContext);
  const { startIndex, endIndex, isDesktop } = usePagination();

  const filteredFood = filterFunction(
    kitchen,
    sortValue,
    searchQuery,
    startIndex,
    endIndex
  );

  return (
    <div>
      <div className="food-panel">
        {filteredFood.length !== 0 ? (
          filteredFood
   
            .map(({ id, name, description, price, src }) => (
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
        {isDesktop && <PaginationFood />}
    </div>
  );
};

export default ItalianFood;
