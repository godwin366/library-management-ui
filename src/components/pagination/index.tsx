import React from "react";
import "./style.scss";
import { MenuItem, Select } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface IProps {
  totalCount: number;
  page: number;
  perPage: number;
  pageChange: (val: number) => void;
  perPageChange: (val: number) => void;
  className?: string;
}

const Pagination: React.FC<IProps> = ({
  totalCount,
  page,
  perPage,
  pageChange,
  perPageChange,
  className,
}) => {
  return (
    <div className={`pagination-container ${className || ""}`}>
      <div className="left-pagination">
        <Select
          className="per-page-select list-wrapper"
          value={perPage}
          onChange={(event) => perPageChange(event.target.value as number)}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        <p> Per Page</p>
      </div>
      <p className="middle-pagination">
        Showing {(page - 1) * perPage + 1} - {(page - 1) * perPage + perPage} of{" "}
        {totalCount}{" "}
      </p>
      <div className="right-pagination">
        <div className="page-number">{page}</div>
        <p>out of {Math.ceil(totalCount / perPage)} pages</p>
        <ChevronLeftIcon className="arrow-buttons"
          onClick={() => pageChange(page > 1 ? page - 1 : page)}
        />
        <ChevronRightIcon className="arrow-buttons"
          onClick={() =>
            pageChange(page < totalCount / perPage ? page + 1 : page)
          }
        />
      </div>
    </div>
  );
};

export default Pagination;
