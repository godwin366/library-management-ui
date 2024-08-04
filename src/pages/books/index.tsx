import { useState } from "react";
import { mockBooks } from "../../utils/mock";
import "./style.scss";
import Pagination from "../../components/pagination";
import ActionMenu from "../../components/menu";
import Popup from "../../components/modal";
import { IBooks, IHeadcells } from "../../utils/interface";
import AppTable from "../../components/appTable";
import StatusTag from "../../components/statusTag";
import BookForm from "./bookForm";
import TableSearch from "../../components/tableSearch";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Books = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const [totalCount, setTotalCount] = useState(230);
  const [popup, setPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEditClick = (row: any) => {
    setOpen(true);
    setSelectedRow(row);
  };
  const handleClose = (status = false) => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
      setOpen(status);
    }, 300);
  };

  const headerCells: IHeadcells[] = [
    { header: "Book Name", value: (row) => row?.name },
    { header: "Author", value: (row) => row?.author },
    {
      header: "Availability",
      value: (row) => <StatusTag status={row?.currentAvailabilityStatus} />,
    },
    {
      header: "Action",
      value: (row) => <ActionMenu options={actionMenuOptions} row={row} />,
    },
  ];

  const actionMenuOptions = [
    {
      label: "Edit",
      onClick: handleEditClick,
    },
  ];

  return (
    <div className="books-container">
      <h2>Books</h2>
      <TableSearch
        buttonIcon={<MenuBookIcon />}
        onSearch={(str) => {
          console.log(str);
        }}
        onAddClick={() => {
          setOpen(true);
          setSelectedRow(null);
        }}
      />
      <div className="books-table">
        <AppTable<IBooks> headerCells={headerCells} tableData={mockBooks} />
        <Pagination
          perPage={perPage}
          page={page}
          totalCount={totalCount}
          perPageChange={setPerPage}
          pageChange={setPage}
          className={"books-pagination"}
        />
      </div>
      <Popup
        open={open}
        setOpen={handleClose}
        className={`edit-modal ${popup ? "popupClosed" : ""}`}
        position="right"
      >
        <BookForm book={selectedRow} handleClose={() => handleClose(false)} />
      </Popup>
    </div>
  );
};

export default Books;
