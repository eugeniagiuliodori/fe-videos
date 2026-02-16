import { forwardRef } from "react";
import {Dialog as MUIDialog} from "@mui/material";
import { DialogProps as DialogType } from "@mui/material";
import { SxProps, Theme } from '@mui/material/styles';
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';

export type DialogProps = Omit<
  DialogType,
  | 'BackdropComponent'
  | 'PaperComponent'
  | 'PaperProps'
  | 'slots'
  | 'slotProps'
  | 'ref'
> & {
  paperSx?: SxProps<Theme>;
  backdropSx?: SxProps<Theme>;
};

const Dialog = 
(props: DialogProps & {ref?: React.Ref<HTMLDivElement>}) => {
    const { className, ref, children, title,open, backdropSx, sx, paperSx,...rest } = props;
    const mergedSx = mergeSx(sx);
    const mergedBackdropSx = mergeSx(backdropSx);
    const mergedPaperSx = mergeSx(paperSx);
    const composedClassName = clsx(className);

    return (
    <MUIDialog 
            ref={ref}
            className={composedClassName}
            open={open} 
            onClose={() => {}} 
            disableEscapeKeyDown  
            title={title}
            children={children}
            sx={mergedSx}
            slotProps={{
              paper: {
                sx: mergedPaperSx,
              },
              backdrop: {
                sx: mergedBackdropSx,
                onClick: (e: React.MouseEvent) => {e.stopPropagation()},
              },
            }}
            {...rest}
    />
    
  
  );
}
export default Dialog;