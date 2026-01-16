import { forwardRef } from "react";
import { Button as MUIButton, ButtonProps as ButtonType} from "@mui/material";


export interface ButtonProps extends ButtonType {}

const Button=forwardRef<HTMLButtonElement, ButtonProps> ((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <MUIButton
      ref={ref}
      className={className}
    
      {...rest}
      >
        {children}
    </MUIButton>
  );
}
);
export default Button;
