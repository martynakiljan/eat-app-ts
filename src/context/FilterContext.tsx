/** @format */

// FilterContext.tsx
import { createContext } from "react";
import { SortAndSearchTypes } from "../types/sortAndSearchTypes";

export const FilterContext = createContext<SortAndSearchTypes>(
  {} as SortAndSearchTypes
);

// const FilterContext = createContext()

// export const useFilterContext = useContext() => {
//   const context = useContext();
//   if(!context) {
//     throw Error;
//   }
//   return context;
// }
// export const FilterContextProvider = ({children}) => {
//    {

//    }

//    return(
//     <FilterContext.Provider>
//       {children}

//     </FilterContext.Provider>
//    )
// }
