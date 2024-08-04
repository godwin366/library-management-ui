import React, { forwardRef, ReactElement } from "react";
import TextField, {
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField";
import "./style.scss";
import { InputAdornment } from "@mui/material";

type IProps = {
  errorMessage?: string;
  preLabel?: string;
  className?: string;
  variant?: TextFieldVariants;
  icon?: {
    position: "start" | "end";
    icon: ReactElement;
    onClick?: () => void;
  };
} & TextFieldProps;

const InputField = forwardRef<HTMLDivElement, IProps>(
  (
    { variant = "outlined", preLabel, errorMessage, className, icon, ...props },
    ref
  ) => {
    return (
      <div ref={ref} className="common-input-container">
        {!!preLabel && <p className="common-input-pre-label">{preLabel}</p>}
        <TextField
          {...props}
          variant={variant}
          className={`common-input-field ${className || ""}`}
          error={!!errorMessage}
          InputProps={
            icon
              ? {
                  ...(icon?.position === "start"
                    ? {
                        startAdornment: (
                          <InputAdornment position={icon.position} onClick={() => icon?.onClick && icon.onClick()} >
                            {icon.icon}
                          </InputAdornment>
                        ),
                      }
                    : {
                        endAdornment: (
                          <InputAdornment position={icon.position} onClick={() => icon?.onClick && icon.onClick()}>
                            {icon.icon}
                          </InputAdornment>
                        ),
                      }),
                }
              : {}
          }
        />
        {errorMessage ? <div className="error-msg">{errorMessage}</div> : <></>}
      </div>
    );
  }
);

export default InputField;
