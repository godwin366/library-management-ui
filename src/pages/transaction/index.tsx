import { useState } from "react";
import { mockTransactions } from "../../utils/mock";
import "./style.scss";
import Pagination from "../../components/pagination";
import ActionMenu from "../../components/menu";
import Popup from "../../components/modal";
import { IHeadcells, ITransaction } from "../../utils/interface";
import AppTable from "../../components/appTable";
import TableSearch from "../../components/tableSearch";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TransactionForm from "./transactionForm";

const Transactions = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const [totalCount] = useState(230);
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
    { header: "User Name", value: (row) => row?.userDetails?.name },
    { header: "Book Name", value: (row) => row?.bookDetails?.name },
    { header: "Due Date", value: (row) => row?.dueDate },
    { header: "Transaction Type", value: (row) => row?.transactionType },
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
    <div className="transaction-container">
      <h2>Transaction</h2>
      <TableSearch
        buttonIcon={<ReceiptLongIcon />}
        onSearch={(str) => {
          console.log(str);
        }}
        onAddClick={() => {
          setOpen(true);
          setSelectedRow(null);
        }}
      />
      <div className="books-table">
        <AppTable<ITransaction> headerCells={headerCells} tableData={mockTransactions} />
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
        <TransactionForm transaction={selectedRow} handleClose={() => handleClose(false)} />
      </Popup>
    </div>
  );
};

export default Transactions;
