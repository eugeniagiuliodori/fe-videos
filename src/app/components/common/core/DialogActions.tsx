import { forwardRef } from "react";
import {DialogActions as MUIDialogActions} from "@mui/material";
import { DialogActionsProps as DialogActionsType } from "@mui/material";


export type DialogActionsProps  = Omit<DialogActionsType, | 'classes'>;
 
const DialogActions=forwardRef<HTMLDivElement, DialogActionsProps> ((props, ref) => {
    const { className,  ...rest } = props;
    return(
        <MUIDialogActions 
            ref={ref}
            className={className}
            {...rest}
        />)
}
);
export default DialogActions;