/** @format */

import React, { useState, useEffect, createContext, useContext } from "react";
import { FilterContext } from "./FilterContext";

type ContextType = {
  filteredFood: [];
  startIndex: number;
  endIndex: number;
  pageCount: number;
  maxPage: number;
  currentPage: number;
  handleChange: (_event: React.ChangeEvent<unknown>, value: number) => void;
  isDesktop: boolean;
};

export const PaginationContext = createContext<ContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
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

  const itemsPerPage = 4;
  const pageCount = Math.ceil(filteredFood.length / itemsPerPage);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(pageCount);

  useEffect(() => {
    const newStartIndex = (currentPage - 1) * itemsPerPage;
    const newEndIndex = Math.min(
      newStartIndex + itemsPerPage,
      filteredFood.length
    );
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [currentPage, endIndex, filteredFood, itemsPerPage, startIndex]);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // hide pagination for mobile //
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const newPageCount = Math.ceil(filteredFood.length / itemsPerPage);

    setMaxPage(newPageCount);
    if (currentPage > newPageCount) {
      setCurrentPage(newPageCount);
    }

    // Update start and end indices based on current page
    const newStartIndex = (currentPage - 1) * itemsPerPage;
    const newEndIndex = Math.min(
      newStartIndex + itemsPerPage,
      filteredFood.length
    );
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [filteredFood, itemsPerPage, currentPage]);

  const paginationContext = {
    startIndex,
    endIndex,
    currentPage,
    handleChange,
    maxPage,
    pageCount,
    filteredFood,
    isDesktop,
  };

  return (
    <PaginationContext.Provider value={paginationContext}>
      {children}
    </PaginationContext.Provider>
  );
};
