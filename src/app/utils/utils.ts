
import { SxProps, Theme } from '@mui/material/styles';
import { Tokens } from '@/types/tokens';

    
    
export const BGCornerGlowBoxTheme = (tokens:Tokens): SxProps<Theme> => ({
    "--bgc-cornerglowbox": tokens.palette.primary.main
} as React.CSSProperties);


export const BGBoxTheme = (tokens:Tokens): SxProps<Theme> => ({
    "--bgc-box": tokens.palette.primary.main
} as React.CSSProperties);

