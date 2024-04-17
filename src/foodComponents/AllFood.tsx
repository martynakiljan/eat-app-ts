/** @format */

import { useState, useContext, useEffect } from "react";
import FoodTile from "./FoodTile";
import { FilterContext } from "../context/FilterContext";
import { filterFunction } from "../utilis/filterFunction";
import NoFoodFound from "./NoFoodFoodFound";
import PaginationFood from "./PaginationFood";
import { Tile } from "../types/tile";
import { usePagination } from "../context/PaginationContext";

const AllFood = ({ kitchen }: { kitchen: Tile[] }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const { sortValue, searchQuery } = useContext(FilterContext);

  const { startIndex, endIndex } = usePagination();

  const allFood = filterFunction(kitchen, sortValue, searchQuery);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="food-panel">
        {allFood.length !== 0 ? (
          allFood
            .slice(startIndex, endIndex)
            .map(({ id, name, description, price, src }) => (
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
