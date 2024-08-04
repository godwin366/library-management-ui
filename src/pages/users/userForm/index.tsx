import React from "react";
import "./style.scss";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, FormProvider, Controller } from "react-hook-form";
import InputField from "../../../components/InputField";
import { emailRegex } from "../../../utils/constant";

interface IProps {
  user: any;
  handleClose: () => void;
}

const UserForm: React.FC<IProps> = ({ user, handleClose }) => {
  const methods = useForm({
    defaultValues: !!user
      ? {
          ...user,
          userName: user?.username,
          phoneNumber: user?.contactNumber,
        }
      : {},
  });
  const onSubmit = (data: any) => {
    console.log("submit", data);
    handleClose();
  };

  return (
    <div className="edit-agent-main">
      <FormProvider {...methods}>
        <div className="header">
          <h6>{!!user ? "Edit" : "Add"} User</h6>
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
            className="edit-agent-form"
          >
            <Controller
              name="userName"
              rules={{ required: "User name must be required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder="Username"
                  errorMessage={error?.message}
                  onChange={(e) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="name"
              rules={{ required: "Name must be required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder="Name"
                  errorMessage={error?.message}
                  onChange={(e) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="email"
              rules={{
                required: "Email must be required",
                validate: (value) =>
                  !emailRegex.test(value) ? "Email must be valid" : true,
              }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder="Email"
                  errorMessage={error?.message}
                  onChange={(e) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="phoneNumber"
              rules={{ required: "Phone Number must be required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  placeholder="Contact Number"
                  errorMessage={error?.message}
                  onChange={(e) => onChange(e.target.value)}
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

export default UserForm;
