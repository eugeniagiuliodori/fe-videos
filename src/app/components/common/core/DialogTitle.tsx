import { forwardRef } from "react";
import {DialogTitle as MUIDialogTitle} from "@mui/material";
import { DialogTitleProps as DialogTitleType } from "@mui/material";


export interface DialogTitleProps extends DialogTitleType{}

const DialogTitle=forwardRef<HTMLDivElement, DialogTitleProps> ((props, ref) => {
    const { className, children,  ...rest } = props;
    return(
         <MUIDialogTitle  
            ref={ref}
            className={className}
            {...rest}
         >
            {children}
        </MUIDialogTitle>
    );
}
);

export default DialogTitle;