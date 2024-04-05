/** @format */

// FilterContext.tsx
import { createContext } from "react";
import { SortAndSearchTypes } from "../types/sortAndSearchTypes";

export const FilterContext = createContext<SortAndSearchTypes>(
  {} as SortAndSearchTypes
);

