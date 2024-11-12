import { useState, useMemo } from "react";
import { paginate } from "../helpers/paginate";
import { UsePaginationResult } from "../interfaces/UsePaginationResult";

// from a set of items, returns a subset, the page number, the total and a method to switch page
export const usePagination = <T>(items: T[], itemsPerPage: number): UsePaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = useMemo(() => paginate(items, currentPage, itemsPerPage), [items, currentPage, itemsPerPage]);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return { paginatedData, currentPage, totalPages, goToPage };
};