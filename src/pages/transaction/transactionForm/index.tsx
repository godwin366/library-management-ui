import React from "react";
import "./style.scss";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, FormProvider, Controller } from "react-hook-form";
import Dropdown from "../../../components/select";
import DatePicker from "../../../components/datePicker";
import dayjs, { Dayjs } from "dayjs";

interface IProps {
  transaction: any;
  handleClose: () => void;
}

const TransactionForm: React.FC<IProps> = ({ transaction, handleClose }) => {
  const methods = useForm({
    defaultValues: !!transaction
      ? {
          user: transaction?.userDetails?.name,
          book: transaction?.bookDetails?.name,
          type: transaction?.transactionType,
          dueDate: transaction?.dueDate
        }
      : {},
  });

  const onSubmit = (data: any) =>
    console.log("submit", {
      ...data,
    });

  const userList = [
    {
      label: "Karthik",
      value: "Karthik",
    },
    {
      label: "Alice Johnson",
      value: "Alice Johnson",
    },
    {
      label: "Balaji",
      value: "Balaji",
    },
    {
      label: "UNKNOWN",
      value: "UNKNOWN",
    },
  ];
  const bookList = [
    {
      label: "The Divine Comedy",
      value: "The Divine Comedy",
    },
    {
      label: "To Kill a Mockingbird",
      value: "To Kill a Mockingbird",
    },
    {
      label: "The Alchemist",
      value: "The Alchemist",
    },
    {
      label: "Wuthering Heights",
      value: "Wuthering Heights",
    },
  ];
  const typeList = [
    {
      label: "Borrowed",
      value: "borrowed",
    },
    {
      label: "Returned",
      value: "returned",
    },
  ];

  return (
    <div className="transaction-edit-main">
      <FormProvider {...methods}>
        <div className="header">
          <h6>{!!transaction ? "Edit" : "Add"} Transactions</h6>
          <div className="header-icons">
            <button type="submit" form="user-form">
              <CheckIcon
                className="check-icon"
                onClick={() =>
                  methods.handleSubmit(() => onSubmit(methods.getValues()))
                }
              />
            </button>
            <CloseIcon className="close-icon" onClick={() => handleClose()} />
          </div>
        </div>
        <div className="edit-body">
          <form
            id="user-form"
            onSubmit={methods.handleSubmit(onSubmit)}
            className="transaction-edit-form"
          >
            <Controller
              name="user"
              rules={{ required: "This Field is required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <Dropdown
                  placeHolder="Select User"
                  variant="outlined"
                  options={userList}
                  labelkey="label"
                  valueKey="value"
                  errorMessage={error?.message}
                  onChange={(e: any) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="book"
              rules={{ required: "This Field is required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <Dropdown
                  placeHolder="Select Book"
                  variant="outlined"
                  options={bookList}
                  labelkey="label"
                  valueKey="value"
                  errorMessage={error?.message}
                  onChange={(e: any) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="type"
              rules={{ required: "This Field is required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <Dropdown
                  placeHolder="Select Transaction"
                  variant="outlined"
                  options={typeList}
                  labelkey="label"
                  valueKey="value"
                  errorMessage={error?.message}
                  onChange={(e: any) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="dueDate"
              rules={{
                required: "Due Date must be required",
                validate: (value) => {
                  if (value) {
                    const selectedDate = dayjs(value);

                    if (!selectedDate.isValid()) {
                      return "Invalid date";
                    }

                    if (selectedDate.isBefore(dayjs(), "day")) {
                      return "Date must be in the future";
                    }

                    return true;
                  }
                  return "Invalid date";
                },
              }}
              render={({
                field: { value, onChange, ...rest },
                fieldState: { error },
              }) => {
                const newValue = value ? dayjs(value) : null;
                const changeHandler = (val: Dayjs | null) => {
                  onChange(dayjs(val).format("MM-DD-YYYY"));
                };
                return (
                  <DatePicker
                    value={newValue}
                    onChange={changeHandler}
                    errorMessage={error?.message}
                    {...rest}
                  />
                );
              }}
            />
          </form>
        </div>
      </FormProvider>
    </div>
  );
};

export default TransactionForm;
