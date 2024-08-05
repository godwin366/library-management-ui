import { forwardRef } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import "./style.scss";

interface IProps extends DatePickerProps<Dayjs> {
  errorMessage?: string;
  preLabel?: string;
  className?: string;
}

const AppDatePicker = forwardRef<HTMLDivElement, IProps>(
  ({ preLabel, errorMessage, className, ...props }, ref) => {
    return (
      <div ref={ref} className="common-date-picker-container">
        {!!preLabel && <p className="common-date-picker-pre-label">{preLabel}</p>}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...props}
            className={`common-date-picker ${errorMessage ? "error-date-picker" : ""} ${className || ""}`}
          />
        </LocalizationProvider>
        {errorMessage ? <div className="error-msg">{errorMessage}</div> : <></>}
      </div>
    );
  }
);

export default AppDatePicker;
