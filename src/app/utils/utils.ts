import { SxProps, Theme } from '@mui/material/styles';
import { globaltheme } from '@/pages/Themes';
    
    
export const BGCornerGlowBoxTheme = (theme: string): SxProps<Theme> => ({
    "--bgc-cornerglowbox": theme === "youtubered" ? globaltheme.palette.primary.light : globaltheme.palette.primary.dark
} as React.CSSProperties);


export const BGBoxTheme = (theme: string): SxProps<Theme> => ({
    "--bgc-box": theme === "youtubered" ? globaltheme.palette.primary.light : globaltheme.palette.primary.dark
} as React.CSSProperties);

