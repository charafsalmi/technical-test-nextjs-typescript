import React from "react";
import { PaginationControlsProps } from "../interfaces/PaginationControlsProps";
import { Button } from "@/components/ui/button";


const PaginationControls = ({ currentPage, totalPages, onPageChange }: PaginationControlsProps) => (
  <div className="flex w-full items-center space-x-2 justify-end">
    <Button size="sm" onClick={() => onPageChange(1)} disabled={currentPage === 1}>
      First
    </Button>
    <Button size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
      Previous
    </Button>
    <span>
      {currentPage} / {totalPages}
    </span>
    <Button size="sm" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
      Next
    </Button>
    <Button size="sm" onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
      Last
    </Button>
  </div>
);

export default PaginationControls;
