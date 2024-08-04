import { useState } from "react";
import { mockUser } from "../../utils/mock";
import "./style.scss";
import Pagination from "../../components/pagination";
import ActionMenu from "../../components/menu";
import Popup from "../../components/modal";
import { IHeadcells, IUser } from "../../utils/interface";
import AppTable from "../../components/appTable";
import InputField from "../../components/InputField";
import AppButton from "../../components/button";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import UserForm from "./userForm";
import TableSearch from "../../components/tableSearch";

const User = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [totalCount, setTotalCount] = useState(mockUser.length);
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
    { header: "User Name", value: (row) => row?.username },
    { header: "Name", value: (row) => row?.name },
    { header: "Email", value: (row) => row?.email },
    { header: "Phone Number", value: (row) => row?.contactNumber },
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
    <div className="user-container">
      <h2>User</h2>
      <TableSearch
        buttonIcon={<PersonOutlineIcon />}
        onSearch={(str) => {
          console.log(str);
        }}
        onAddClick={() => {
          setOpen(true);
          setSelectedRow(null);
        }}
      />
      <div className="user-table">
        <AppTable<IUser> headerCells={headerCells} tableData={mockUser} />
        <Pagination
          perPage={perPage}
          page={page}
          totalCount={totalCount}
          perPageChange={setPerPage}
          pageChange={setPage}
          className={"user-pagination"}
        />
      </div>
      <Popup
        open={open}
        setOpen={handleClose}
        className={`edit-modal ${popup ? "popupClosed" : ""}`}
        position="right"
      >
        <UserForm user={selectedRow} handleClose={() => handleClose(false)} />
      </Popup>
    </div>
  );
};

export default User;
