/** @format */

import { TileTypes } from "../types/tileTypes";

export const filterFunction = (
  kitchen: TileTypes[],
  sortValue: string,
  searchQuery: string
) => {
  const sortedKitchen = [...kitchen];

  if (sortValue === "priceUp") {
    sortedKitchen.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceDown") {
    sortedKitchen.sort((a, b) => b.price - a.price);
  }

  if (searchQuery.trim() !== "") {
    const filteredFood = sortedKitchen.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredFood);
    return filteredFood;
  } else {
    return sortedKitchen;
  }
};
