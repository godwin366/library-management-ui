import React from "react";
import "./style.scss";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, FormProvider, Controller } from "react-hook-form";
import InputField from "../InputField";
import Dropdown from "../select";

interface IProps {
  user: any;
  handleClose: () => void;
}

const EditAgent: React.FC<IProps> = ({ user, handleClose }) => {
  const methods = useForm({
    defaultValues: user,
  });
  const onSubmit = (data: any) => console.log("submit", data);

  const languageOptions = [
    {
      label: "Tamil",
      value: "tamil",
    },
    {
      label: "English",
      value: "english",
    },
    {
      label: "Malayalam",
      value: "malayalam",
    },
  ];

  return (
    <div className="edit-agent-main">
      <FormProvider {...methods}>
        <div className="header">
          <h6>Edit Agent</h6>
          <div className="header-icons">
            <CheckIcon
              className="check-icon"
              onClick={() => onSubmit(methods.getValues())}
            />
            <CloseIcon className="close-icon" onClick={() => handleClose()} />
          </div>
        </div>
        <div className="edit-body">
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="edit-agent-form"
          >
            <Controller
              name="userName"
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  label="Username"
                  placeholder="Edit your Username"
                  errorMessage={error?.message}
                  required={true}
                  disabled={true}
                  onChange={(e) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="name"
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  label="Name"
                  placeholder="Edit your Name"
                  errorMessage={error?.message}
                  required={true}
                  disabled={true}
                  onChange={(e) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="userType"
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  label="UserType"
                  placeholder="Edit your UserType"
                  errorMessage={error?.message}
                  required={true}
                  disabled={true}
                  onChange={(e) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="website"
              rules={{ required: true }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => {
                return (
                  <InputField
                    label="Website"
                    placeholder="Edit your Website"
                  errorMessage={error?.message}
                    required={true}
                    onChange={(e) => onChange(e.target.value)}
                    {...rest}
                  />
                );
              }}
            />
            <Controller
              name="workspaceId"
              rules={{ required: "This Field is required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <InputField
                  label="Workspace Id"
                  placeholder="Edit your Workspace Id"
                  errorMessage={error?.message}
                  required={true}
                  onChange={(e) => onChange(e.target.value)}
                  {...rest}
                />
              )}
            />
            <Controller
              name="language"
              rules={{ required: "This Field is required" }}
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <Dropdown
                  label="Edit your language"
                  placeholder="Edit your language"
                  variant="standard"
                  options={languageOptions}
                  labelkey="label"
                  valueKey="value"
                  errorMessage={error?.message}
                  required={true}
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

export default EditAgent;
