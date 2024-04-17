/** @format */

import { createContext } from "react";
import { SortAndSearch } from "../types/sortAndSearch";

export const FilterContext = createContext<SortAndSearch>({} as SortAndSearch);
