import { forwardRef } from "react";
import {Dialog as MUIDialog} from "@mui/material";
import { DialogProps as DialogType } from "@mui/material";
import { SxProps, Theme } from '@mui/material/styles';

export type DialogProps = Omit<
  DialogType,
  | 'BackdropComponent'
  | 'PaperComponent'
  | 'PaperProps'
  | 'slots'
  | 'slotProps'
  | 'sx'
> & {
  paperSx?: SxProps<Theme>;
  backdropSx?: SxProps<Theme>;
};

const Dialog=forwardRef<HTMLDivElement, DialogProps> ((props, ref) => {
    const { className, children, title,open, backdropSx, paperSx,...rest } = props;

    return (
    <MUIDialog 
            ref={ref}
            className={className}
            open={open} 
            onClose={() => {}} 
            disableEscapeKeyDown  
            title={title}
            children={children}
            slotProps={{
              paper: {
                sx: paperSx,
              },
              backdrop: {
                sx: backdropSx,
                onClick: (e: React.MouseEvent) => {e.stopPropagation()},
              },
            }}
            {...rest}
    />
    
  
  );
}
);
export default Dialog;