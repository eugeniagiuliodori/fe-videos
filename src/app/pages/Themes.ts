"use client";

import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { SxProps, Theme } from '@mui/material/styles';
import { alpha } from "@mui/material/styles";


declare module '@mui/material/styles' {
  interface Theme {
    palette2: {
      lightMain: string;
       middleLightMain?: string;
      bglightMainHover?: string;
      bgmiddleLightMainHover?:string;
    };
  }
  interface ThemeOptions {
    palette2?: {
      lightMain?: string;
      middleLightMain?: string;
      bglightMainHover?: string;
      bgmiddleLightMainHover?:string;
    };
  }
}

 
  export const globaltheme = createTheme({
    palette: {
      primary:{
        main: "#d50000",
        light: "#d50000",
        dark:"#000000"
       
      },
      secondary: grey
    },
    palette2:{
          lightMain:"#ffebee",
          middleLightMain:"#e57373", 
          bglightMainHover:"#ffcdd2",
          bgmiddleLightMainHover:"#ef5350"
    }
  });

const getBgStart = (theme:Theme) => theme.palette2.lightMain ?? '#ffffff';
const getBgEnd = (theme:Theme) => theme.palette2.middleLightMain ?? '#ffffff';

const getBgStartOverlay = (theme:Theme) => theme.palette2.bglightMainHover ?? '#ffffff';
const getBgEndOverlay = (theme:Theme) => theme.palette2.bgmiddleLightMainHover ?? '#ffffff';

export const PlaybackRateMnItem: SxProps<Theme> = (theme) => ({
  position: 'relative', 
  color: 'white',
  fontWeight: 700,
  backgroundImage: `linear-gradient(
          90deg,
          ${alpha(getBgStart(theme), 0.5)},
          ${alpha(getBgEnd(theme), 0.5)}
        )`,

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity 200ms ease',
    background: `linear-gradient(
            ${alpha(getBgStartOverlay(theme), 0.3)},
            ${alpha(getBgEndOverlay(theme), 0.3)}
          )`,
  },

  '&:hover::after': {
    opacity: 1,
  },
});

export const PlaybackRateMn: SxProps<Theme> = (theme) => ({
  backgroundImage: `linear-gradient(
    90deg, 
    ${theme.palette2.lightMain}, 
    ${theme.palette2.middleLightMain}
  )`,
});

