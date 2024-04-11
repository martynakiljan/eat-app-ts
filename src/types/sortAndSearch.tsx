/** @format */

export type SortAndSearch = {
  searchQuery: string;
  handleChangeSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  sortValue: string;
};