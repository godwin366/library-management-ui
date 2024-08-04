import React from "react";
import "./style.scss";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, FormProvider, Controller } from "react-hook-form";
import InputField from "../../../components/InputField";
import Dropdown from "../../../components/select";

interface IProps {
  book: any;
  handleClose: () => void;
}

const BookForm: React.FC<IProps> = ({ book, handleClose }) => {
  const methods = useForm({
    defaultValues: !!book
      ? {
          ...book,
          availability: book.currentAvailabilityStatus,
        }
      : {
          name: "",
          author: "",
          availability: "",
        },
  });
  const onSubmit = (data: any) => {
    console.log("submit", data);
    handleClose();
  };

  console.log(methods.getValues());

  const availabilityOptions = [
    {
      label: "Available",
      value: "Available",
    },
    {
      label: "Not Available",
      value: "Not Available",
    },
  ];

  return (
    <div className="edit-agent-main">
      <FormProvider {...methods}>
        <div className="header">
          <h6>{!!book ? "Edit" : "Add"} Books</h6>
          <div className="header-icons">
            <button type="submit" form="books-form">
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
            id="books-form"
            onSubmit={methods.handleSubmit(onSubmit)}
            className="edit-agent-form"
          >
            <Controller
              name="name"
              rules={{ required: "Book name must be required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder="Book Name"
                  errorMessage={error?.message}
                  onChange={(e) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="author"
              rules={{ required: "Author Name must be required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder="Author Name"
                  errorMessage={error?.message}
                  onChange={(e) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="availability"
              rules={{ required: "This Field is required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <Dropdown
                  placeHolder="Edit Availablilty"
                  variant="outlined"
                  options={availabilityOptions}
                  labelkey="label"
                  valueKey="value"
                  errorMessage={error?.message}
                  onChange={(e: any) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
          </form>
        </div>
      </FormProvider>
    </div>
  );
};

export default BookForm;
