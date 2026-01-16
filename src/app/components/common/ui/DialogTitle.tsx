import { forwardRef } from "react";
import BaseDialogTitle from "@/components/common/core/DialogTitle";
import { DialogTitleProps } from "@/components/common/core/DialogTitle";


const DialogTitle=forwardRef<HTMLDivElement, DialogTitleProps> ((props, ref) => {
    const { className, children,  ...rest } = props;
    return(
         <BaseDialogTitle  
            ref={ref}
            className={className}
            {...rest}
         >
            {children}
        </BaseDialogTitle>
    );
}
);

export default DialogTitle;