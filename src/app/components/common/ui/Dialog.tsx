import { forwardRef } from "react";
import BaseDialog from "@/components/common/core/Dialog";
import { DialogProps } from "@/components/common/core/Dialog";
import styles from './styles_1/Dialog.module.css';
import clsx from 'clsx';



const Dialog=forwardRef<HTMLDivElement, DialogProps> ((props, ref) => {
    const { className, children, title,open,  backdropSx,paperSx,...rest } = props;
    const composedClassName = clsx(
                                styles.backdrop ,
                                className
                              );
 
    return (
    <BaseDialog 
            ref={ref}
            {...rest}
            className={composedClassName}
            open={open} 
            onClose={() => {}} 
            disableEscapeKeyDown  
            title={title}
            children={children}
            backdropSx = {backdropSx}
            paperSx={paperSx}
            
              
       
    />
    
  
  );
}
)
export default Dialog;