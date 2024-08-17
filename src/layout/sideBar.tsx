import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import "./sideBar.scss";
import TopBar from "./topBar";

interface IHeader {
  label: string;
  path: string;
  icon: JSX.Element;
}

const Headers = [
  { label: "User", path: "users", icon: <PersonOutlineIcon /> },
  { label: "Books", path: "books", icon: <MenuBookIcon /> },
  { label: "Transactions", path: "transactions", icon: <ReceiptLongIcon /> },
];

const SideBar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("users");

  const onSelect = (header: IHeader) => {
    setSelected(header.path);
    navigate(header.path);
  };

  return (
    <div className="sidebar-layout">
      <TopBar />
      <div className="lower-container">
        <div className="sidebar-container">
          {Headers.map((header, index) => (
            <div
              key={index}
              className={`sidebar-item ${selected === header.path && "active"}`}
              onClick={() => onSelect(header)}
            >
              {header.icon}
              <span>{header.label}</span>
            </div>
          ))}
        </div>
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
