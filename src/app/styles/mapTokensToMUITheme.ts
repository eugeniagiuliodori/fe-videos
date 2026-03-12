import { createTheme } from '@mui/material/styles';
import type { AppTheme, Tokens} from '../../types/tokens';
import { alpha } from "@mui/material/styles";


export const getBgStart = (tokens: Tokens) => tokens.palette.secondary?.light ?? '#ffffff';
export const getBgEnd = (tokens: Tokens) => tokens.palette.secondary?.dark ?? '#ffffff';

export const getBgStartOverlay = (tokens: Tokens) => tokens.palette.secondary?.bgStartGradientHover ?? '#ffffff';
export const getBgEndOverlay = (tokens: Tokens) => tokens.palette.secondary?.bgEndGradientHover ?? '#ffffff';

declare module '@mui/material/styles' {
  interface Palette {
    primaryExtra?:{  //Extension de theme.palette.action
      states?:{
        disabled?:{   
          backgroundColor:string,
          borderColor:string;
        }
      }
    },
    secondaryExtra?: {
       bgStartGradientHover?: string;
       bgEndGradientHover?: string;
    };
  }
  interface PaletteOptions {
    primaryExtra?:{
      states?:{
        disabled?:{
          backgroundColor?:string,
          borderColor?:string;
        }
      }
    }
    secondaryExtra?: {
       bgStartGradientHover?: string;
       bgEndGradientHover?: string;
    };
  }
}

const mapModeTuActiveToken = (nameTheme:string) => {
  switch(nameTheme){
    case 'default-light':{
      return 'light';
    }
    case 'default-dark':{
      return 'dark';
    }
  }
}

export const mapTokensToMUITheme = (theme: AppTheme) => {
   const { mode, tokens } = theme;
  return createTheme({
    palette: {
      mode:mapModeTuActiveToken(mode),
      background:tokens.palette.background,
      text:tokens.palette.text,
      primary: {
        main: tokens.palette.primary.main,
        light: tokens.palette.primary.light,
        dark: tokens.palette.primary.dark,
        contrastText: tokens.palette.primary.contrastText,
        states:{
            focus: tokens.palette.primary.focus,
            hover: tokens.palette.primary.hover,
            active: tokens.palette.primary.active,
        },
      },
      primaryExtra:{
        states:{
          disabled:{
            backgroundColor:tokens.palette.action?.disabledBackground,
            borderColor:tokens.palette.action?.borderColor
          }
        }
      },
      secondaryExtra:{
        bgStartGradientHover: tokens.palette.secondary?.bgStartGradientHover,
        bgEndGradientHover: tokens.palette.secondary?.bgEndGradientHover
      },
      /*
      action:{
        active: tokens.palette.action?.active,
        focus: tokens.palette.action?.focus,
        hover: tokens.palette.action?.hover,
        disabled:tokens.palette.action?.disabled,
        disabledBackground:tokens.palette.action?.disabledBackground,
        disabledOpacity:tokens.palette.action?.disabledOpacity
      }
      */
    },
    components: {
      
      MuiMenuItem:{
        styleOverrides:{
            root: {
              position: 'relative', 
              color: 'white',
              fontWeight: 700,
              backgroundImage: `linear-gradient(
                        90deg,
                        ${alpha(getBgStart(tokens), 0.5)},
                        ${alpha(getBgEnd(tokens), 0.5)}
              )`,
            
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                opacity: 0,
                transition: 'opacity 200ms ease',
                background: `linear-gradient(
                        ${alpha(getBgStartOverlay(tokens), 0.3)},
                        ${alpha(getBgEndOverlay(tokens), 0.3)}
                      )`,
              },
            
              '&:hover::after': {
                opacity: 1,
              },
          },
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            width: tokens.defaultSmallComponent.width,
            height: tokens.defaultSmallComponent.height,
            minHeight:tokens.defaultSmallComponent.minHeight,
            maxHeight:tokens.defaultSmallComponent.maxHeight,
            minWidth:tokens.defaultSmallComponent.minWidth,
            maxWidth:tokens.defaultSmallComponent.maxWidth,
             backgroundImage: `linear-gradient(
                      90deg,
                      ${alpha(getBgStart(tokens), 0.5)},
                      ${alpha(getBgEnd(tokens), 0.5)}
                    )`,
            
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                opacity: 0,
                transition: 'opacity 200ms ease',
                background: `linear-gradient(
                        ${alpha(getBgStartOverlay(tokens), 0.3)},
                        ${alpha(getBgEndOverlay(tokens), 0.3)}
                      )`,
              },
            
              '&:hover::after': {
                opacity: 1,
              },
          },
        },
      },
    },
  });
}

