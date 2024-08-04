import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "../utils/constant";

interface IProps {
  isLoggedIn: boolean;
}

const PrivatRoute: React.FC<IProps> = ({ isLoggedIn }) => {
  return <div className="App">{isLoggedIn ? <Outlet /> : <Navigate to={PATH.LOGIN} />}</div>;
};

export default PrivatRoute;
