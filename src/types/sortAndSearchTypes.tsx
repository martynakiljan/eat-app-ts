/** @format */

export type SortAndSearchTypes = {
  searchQuery: string;
  handleChangeSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  sortValue: string;
};