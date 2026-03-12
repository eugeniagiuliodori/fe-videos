import BaseDialogTitle from "@/components/common/core/DialogTitle";
import { DialogTitleProps } from "@/components/common/core/DialogTitle";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';

const DialogTitle = 
(props: DialogTitleProps & {ref?: React.Ref<HTMLDivElement>}) => {
    const { className, sx, ref, children,  ...rest } = props;

    const mergedSx = mergeSx(sx);
    const composedClassName = clsx(className);

    return(
         <BaseDialogTitle  
            ref={ref}
            className={composedClassName}
            sx={mergedSx}
            {...rest}
         >
            {children}
        </BaseDialogTitle>
    );
}

export default DialogTitle;