import {DialogContent as MUIDialogContent} from "@mui/material";
import { DialogContentProps as DialogContentType} from "@mui/material";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';

export type DialogContentProps = Omit<DialogContentType, 'ref' | 'classes'>;

const DialogContent = 
(props: DialogContentProps & {ref?: React.Ref<HTMLDivElement>}) => {
    const { className, ref, sx, ...rest } = props;
    const mergedSx = mergeSx(sx);
    const composedClassName = clsx(className);


    return(
         <MUIDialogContent 
            ref={ref}
            className={composedClassName}
            sx={mergedSx}
            {...rest}
        />
    );

}


export default DialogContent;