import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Header from "../components/header";
import "./topBar.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

const TopBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="topbar-container">
      <Header label="Library" className="top-header"></Header>
      <div
        className="logout-container"
        onClick={() => dispatch(setUser({ userName: "" }))}
      >
        <LogoutIcon /> Logout
      </div>
    </div>
  );
};

export default TopBar;
