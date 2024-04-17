/** @format */

import Pagination from "@mui/material/Pagination";
import { usePagination } from "../context/PaginationContext";

const PaginationFood = () => {
  const { pageCount, currentPage, handleChange } = usePagination();

  console.log(pageCount);

  return (
    <div className="pagination">
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        key={crypto.randomUUID()}
      />
    </div>
  );
};

export default PaginationFood;
