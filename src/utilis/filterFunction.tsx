/** @format */
import { Tile } from "../types/tile";

export const filterFunction = (
  kitchen: Tile[],
  sortValue: string,
  searchQuery: string,
  startIndex: number,
  endIndex: number
) => {
  let filteredKitchen = kitchen;

  if (searchQuery !== "") {
    filteredKitchen = filteredKitchen.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortValue === "priceUp") {
    filteredKitchen.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceDown") {
    filteredKitchen.sort((a, b) => b.price - a.price);
  }

  return filteredKitchen.slice(startIndex, endIndex);
};
