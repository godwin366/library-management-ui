import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider, Controller } from "react-hook-form";
import InputField from "../InputField";
import AppButton from "../button";
import { setUser } from "../../redux/slices/userSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./style.scss";

interface ILogin {
  userName: string;
  password: string;
}

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();
  const methods = useForm<ILogin>({
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const onSubmit = (data: ILogin) => {
    console.log(data);
    dispatch(setUser({ userName: data.userName }));
  };
  return (
    <FormProvider {...methods}>
      <form
        className="login-container"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Controller
          name="userName"
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
          name="password"
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <InputField
              preLabel="Password"
              type={visibility ? "text" : "password"}
              icon={{
                position: "end",
                icon: !visibility ? <VisibilityIcon /> : <VisibilityOffIcon />,
                onClick: () => {
                  setVisibility((prev) => !prev);
                },
              }}
              errorMessage={error?.message}
              onChange={(e) => onChange(e.target.value)}
              {...rest}
            />
          )}
        />
        <AppButton
          className="auth-button"
          type="submit"
          label="Login"
          variant="contained"
        />
      </form>
    </FormProvider>
  );
};

export default Login;
