import BaseDialogContent from "@/components/common/core/DialogContent";
import { DialogContentProps } from "@/components/common/core/DialogContent";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';


const DialogContent = 
(props: DialogContentProps & {ref?: React.Ref<HTMLDivElement>}) => {
    const { className, sx, ref, ...rest } = props;

    const mergedSx = mergeSx(sx);
    const composedClassName = clsx(className);
    return(
         <BaseDialogContent 
            ref={ref}
            className={composedClassName}
            sx={mergedSx}
            {...rest}
        />
    );

}

export default DialogContent;