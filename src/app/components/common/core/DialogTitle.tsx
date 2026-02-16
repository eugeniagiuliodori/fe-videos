import {DialogTitle as MUIDialogTitle} from "@mui/material";
import { DialogTitleProps as DialogTitleType } from "@mui/material";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';


export type DialogTitleProps = Omit<DialogTitleType, 'ref' | 'classes'>;

const DialogTitle = 
(props: DialogTitleProps & {ref?: React.Ref<HTMLDivElement>}) => {
    const { className, ref, children, sx, ...rest } = props;
    const mergedSx = mergeSx(sx);
    const composedClassName = clsx(className);

    return(
         <MUIDialogTitle  
            ref={ref}
            className={composedClassName}
            sx={mergedSx}
            {...rest}
         >
            {children}
        </MUIDialogTitle>
    );
}

export default DialogTitle;