import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "../utils/constant";

interface IProps {
  isLoggedIn: boolean;
}

const PublicRoute: React.FC<IProps> = ({ isLoggedIn }) => {
  return <div className="App">{!isLoggedIn ? <Outlet /> : <Navigate to={PATH.USER} />}</div>;
};

export default PublicRoute;
