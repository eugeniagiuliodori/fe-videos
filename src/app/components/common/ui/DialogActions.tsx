import { forwardRef } from "react";
import BaseDialogActions from "@/components/common/core/DialogActions";
import { DialogActionsProps } from "@/components/common/core/DialogActions";


export const dialogActionsCentered = {
  justifyContent: 'center',
};
 
const DialogActions=forwardRef<HTMLDivElement, DialogActionsProps> ((props, ref) => {
    const { className,   ...rest } = props;

    return(
        <BaseDialogActions 
            ref={ref}
            className={className}
            sx={dialogActionsCentered}
            {...rest}
        />)
}
);
export default DialogActions;