import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PATH } from "../utils/constant";
import User from "../pages/users";
import Transactions from "../pages/transaction";
import AuthPage from "../pages/auth";
import PrivatRoute from "./privatRoute";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PublicRoute from "./publicRoute";
import SideBar from "../layout/sideBar";
import Books from "../pages/books";

const AppRouter: FC = () => {
  const isLoggedIn = !!useSelector((state: RootState) => state?.user?.userName);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isLoggedIn={isLoggedIn} />}>
          <Route path={PATH.LOGIN} element={<AuthPage />}></Route>
        </Route>
        <Route element={<PrivatRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<SideBar />}>
            <Route path={PATH.USER} element={<User />} />
            <Route path={PATH.BOOK} element={<Books />} />
            <Route path={PATH.TRANSACTION} element={<Transactions />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={PATH.USER} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
