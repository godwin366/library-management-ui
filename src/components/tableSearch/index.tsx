import React, { ReactElement } from "react";
import InputField from "../InputField";

import SearchIcon from "@mui/icons-material/Search";
import AppButton from "../button";
import "./style.scss";

interface IProps {
  onSearch: (searchText: string) => void;
  onAddClick: () => void;
  buttonIcon: ReactElement;
}

const TableSearch: React.FC<IProps> = ({
  onSearch,
  onAddClick,
  buttonIcon,
}) => {
  return (
    <div className="search-container">
      <InputField
        placeholder="Search"
        className="search-input"
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        icon={{
          position: "end",
          icon: <SearchIcon className="search-icon" />,
        }}
      ></InputField>
      <AppButton
        className="add-button"
        label="Add"
        onClick={onAddClick}
        startIcon={buttonIcon}
      />
    </div>
  );
};

export default TableSearch;
