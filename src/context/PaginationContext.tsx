/** @format */

import React, { useState, useEffect, createContext, useContext } from "react";
import { FilterContext } from "./FilterContext";
import { Tile } from "../types/tile";

type ContextType = {
  filteredFood: [];
  startIndex: number;
  endIndex: number;
  pageCount: number;
  maxPage: number;
  currentPage: number;
  handleChange: (_event: React.ChangeEvent<unknown>, value: number) => void;
};

export const PaginationContext = createContext<ContextType | null>(null);

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within PaginationProvider.");
  }
  return context;
};

export const PaginationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { searchQuery, filteredFood } = useContext(FilterContext);

  console.log(filteredFood);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(filteredFood.length / itemsPerPage);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(pageCount);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const newStartIndex = (currentPage - 1) * itemsPerPage;
    const newEndIndex = Math.min(
      newStartIndex + itemsPerPage,
      filteredFood.length
    );
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
    console.log(startIndex, endIndex);
  }, [currentPage, filteredFood, itemsPerPage]);

  useEffect(() => {
    const newPageCount = Math.ceil(filteredFood.length / itemsPerPage);

    setMaxPage(newPageCount);
    if (currentPage > newPageCount) {
      setCurrentPage(newPageCount);
    }
  }, [filteredFood, itemsPerPage, currentPage]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const paginationContext = {
    startIndex,
    endIndex,
    currentPage,
    handleChange,
    maxPage,
    pageCount,
    filteredFood,
  };


  return (
    <PaginationContext.Provider value={paginationContext}>
      {children}
    </PaginationContext.Provider>
  );
};
