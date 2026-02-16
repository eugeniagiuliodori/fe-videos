import BaseDialog from "@/components/common/core/Dialog";
import { DialogProps } from "@/components/common/core/Dialog";
import styles from './styles_1/Dialog.module.css';
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';
import { WidthFull } from "@mui/icons-material";


const Dialog = 
(props: DialogProps & {ref?: React.Ref<HTMLDivElement>}) => {
    const { className, sx, ref, children, title,open,  backdropSx,paperSx,...rest } = props;
    
    const mergedSx = mergeSx(sx);
    const mergedBackdropSx = mergeSx(backdropSx);
    const mergedPaperSx = mergeSx({maxWidth:"60vw",width:"50vw"}, paperSx);
    const composedClassName = clsx(styles.backdrop, className);
 
    return (
    <BaseDialog 
            ref={ref}
            {...rest}
            className={composedClassName}
            sx={mergedSx}
            open={open} 
            onClose={() => {}} 
            disableEscapeKeyDown  
            title={title}
            children={children}
            backdropSx = {mergedBackdropSx}
            paperSx={mergedPaperSx}
            
              
       
    />
    
  
  );
}

export default Dialog;