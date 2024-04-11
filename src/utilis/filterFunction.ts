/** @format */

import { Tile } from "../types/tile.tsx";

export const filterFunction = (
  kitchen: Tile[],
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
    return filteredFood;
  } else {
    return sortedKitchen;
  }
};
