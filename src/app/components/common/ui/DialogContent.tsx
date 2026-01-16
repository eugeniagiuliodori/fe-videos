import { forwardRef } from "react";
import BaseDialogContent from "@/components/common/core/DialogContent";
import { DialogContentProps } from "@/components/common/core/DialogContent";
import styles from './styles_1/Dialog.module.css';
import clsx from 'clsx';


const DialogContent=forwardRef<HTMLDivElement, DialogContentProps> ((props, ref) => {
    const { className,  ...rest } = props;
    return(
         <BaseDialogContent 
            ref={ref}
            className={className}
            {...rest}
        />
    );

}
);

export default DialogContent;