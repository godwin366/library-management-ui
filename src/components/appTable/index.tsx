import React from "react";
import { IHeadcells } from "../../utils/interface";
import "./style.scss"

interface IProps<T = any> {
  headerCells: IHeadcells[];
  tableData: T[];
  className?: string;
}

const AppTable=<T, > ({ headerCells, tableData, className }: IProps<T>) => {
  return (
    <table className={`common-table ${className || ""}`}>
      <thead>
        <tr className="common-row">
          {headerCells.map((each, index) => (
            <th key={index} className="common-head-cell">
              {each.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} className="common-row">
            {headerCells.map((each, index) => (
              <td key={index} className="common-row-cell">
                {each.value(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppTable;
