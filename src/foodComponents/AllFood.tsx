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
import { Tile } from "../types/tile.tsx";
import Pagination from "@mui/material/Pagination";

const AllFood: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  const { sortValue, searchQuery, setSearchQuery } = useContext(FilterContext);
  const allFood: Tile[] = ChineseKitchen.concat(
    ItalianKitchen,
    FastFoodKitchen
  );

  const filteredFood: Tile[] = filterFunction(allFood, sortValue, searchQuery);

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
  const [maxPage, setMaxPage] = useState(pageCount);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredFood.length);
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }, [currentPage, filteredFood, itemsPerPage]);

  useEffect(() => {
    if (currentPage > maxPage) {
      setCurrentPage(maxPage);
    }
  }, [maxPage, currentPage, searchQuery]);

  useEffect(() => {
    const newPageCount = Math.ceil(filteredFood.length / itemsPerPage);
    setMaxPage(newPageCount);
    if (currentPage > newPageCount) {
      setCurrentPage(newPageCount);
    }
  }, [filteredFood, itemsPerPage, currentPage]);


  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <>
      <div className="food-panel">
        {filteredFood.length !== 0 ? (
          filteredFood
            .slice(startIndex, endIndex)
            .map(({ id, name, description, price, src }: Tile) => (
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
          <NoFoodFound/>
        )}
      </div>
      {isDesktop && (
        <div className="pagination">
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChange}
            color="primary"
          />
        </div>
      )}
    </>
  );
};

export default AllFood;
