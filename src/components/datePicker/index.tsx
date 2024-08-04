import React, { forwardRef, ReactElement } from "react";
import TextField, {
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField";
import "./style.scss";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";

interface IProps extends DatePickerProps {
  errorMessage?: string;
  preLabel?: string;
  className?: string;
  icon?: {
    position: "start" | "end";
    icon: ReactElement;
    onClick?: () => void;
  };
}

const AppDatePicker = forwardRef<HTMLDivElement, IProps>(
  ({ preLabel, errorMessage, className, icon, ...props }, ref) => {
    return (
      <div ref={ref} className="common-input-container">
        {!!preLabel && <p className="common-input-pre-label">{preLabel}</p>}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Basic date picker" />
          </DemoContainer>
        </LocalizationProvider>
        {errorMessage ? <div className="error-msg">{errorMessage}</div> : <></>}
      </div>
    );
  }
);

export default AppDatePicker;
