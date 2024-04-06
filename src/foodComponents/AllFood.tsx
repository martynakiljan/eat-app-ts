/** @format */

import React, { useState, useContext, useEffect } from "react";
import { ChineseKitchen } from "../kitchenData/ChineseKitchen/ChineseKitchen";
import { ItalianKitchen } from "../kitchenData/ItalianKitchen/ItalianKitchen";
import { FastFoodKitchen } from "../kitchenData/FastFoodKitchen/FastFoodKitchen";
import FoodTile from "./FoodTile";
import { v4 as uuidv4 } from "uuid";
import { FilterContext } from "../context/FilterContext";
import { filterFunction } from "../utilis/filterFunction";
import NoFoodFound from "./NoFoodFoodFound";
import { TileTypes } from "../types/tileTypes";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AllFood: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

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

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [filteredFood]);

  const itemsPerPage = 4;
  const pageCount = Math.ceil(filteredFood.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredFood.length);
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }, [currentPage, filteredFood, itemsPerPage]);

  return (
    <div className="food-panel__container">
      <div className="food-panel">
        {filteredFood.length !== 0 ? (
          filteredFood
            .slice(startIndex, endIndex)
            .map(({ id, name, description, price, src }: TileTypes) => (
              <FoodTile
                id={id}
                name={name}
                description={description}
                price={price}
                src={src}
                key={uuidv4()}
              />
            ))
        ) : (
          <NoFoodFound />
        )}
      </div>
      {isDesktop && (
        <Stack spacing={4} justifyContent="center" alignItems="center">
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      )}
    </div>
  );
};

export default AllFood;
