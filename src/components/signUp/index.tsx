import { useDispatch } from "react-redux";
import { useForm, FormProvider, Controller } from "react-hook-form";
import InputField from "../InputField";
import AppButton from "../button";
import { emailRegex } from "../../utils/constant";
import { setUser } from "../../redux/slices/userSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./style.scss";
import { useState } from "react";

interface ISignup {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUP = () => {
  const [visibility, setVisibility] = useState({
    pass: false,
    confirmPass: false,
  });

  const dispatch = useDispatch();
  const methods = useForm<ISignup>({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ISignup) => {
    console.log(data);
    dispatch(setUser({ userName: data.userName, email: data.email }));
  };

  return (
    <FormProvider {...methods}>
      <form
        className="login-container"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Controller
          name="userName"
          rules={{ required: "User name must be required" }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <InputField
              preLabel="Username"
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
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <InputField
              preLabel="Email"
              errorMessage={error?.message}
              onChange={(e) => onChange(e.target.value)}
              {...rest}
            />
          )}
        />
        <Controller
          name="password"
          rules={{ required: "Password must be required" }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <InputField
              preLabel="Password"
              errorMessage={error?.message}
              type={visibility.pass ? "text" : "password"}
              icon={{
                position: "end",
                icon: !visibility.pass ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                ),
                onClick: () => {
                  setVisibility((prev) => ({ ...prev, pass: !prev.pass }));
                },
              }}
              onChange={(e) => onChange(e.target.value)}
              {...rest}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          rules={{
            required: "Confirm Password must be required",
            validate: (value) =>
              value !== methods.getValues("password")
                ? "Password must match"
                : true,
          }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <InputField
              preLabel="Confirm Password"
              errorMessage={error?.message}
              onChange={(e) => onChange(e.target.value)}
              type={visibility.confirmPass ? "text" : "password"}
              icon={{
                position: "end",
                icon: !visibility.confirmPass ? <VisibilityIcon /> : <VisibilityOffIcon />,
                onClick: () => {
                  setVisibility((prev) => ({ ...prev, confirmPass: !prev.pass }));
                },
              }}
              {...rest}
            />
          )}
        />
        <AppButton
          className="auth-button"
          type="submit"
          label="Signup"
          variant="contained"
        />
      </form>
    </FormProvider>
  );
};

export default SignUP;
