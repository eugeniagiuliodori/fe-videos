import { forwardRef } from "react";
import {DialogContent as MUIDialogContent} from "@mui/material";
import { DialogContentProps as DialogContentType} from "@mui/material";


export type DialogContentProps = Omit<DialogContentType, | 'classes'>;

const DialogContent=forwardRef<HTMLDivElement, DialogContentProps> ((props, ref) => {
    const { className,  ...rest } = props;
    return(
         <MUIDialogContent 
            ref={ref}
            className={className}

            {...rest}
        />
    );

}
);

export default DialogContent;