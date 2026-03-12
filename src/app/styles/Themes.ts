"use client";
import { mapTokensToMUITheme } from './mapTokensToMUITheme';
import {activeTheme} from '../../types/tokens';
import { SxProps, Theme } from '@mui/material';
import { alpha } from "@mui/material/styles";
import { getBgStart, getBgEnd, getBgStartOverlay, getBgEndOverlay } from './mapTokensToMUITheme';

 
export const globaltheme = mapTokensToMUITheme(activeTheme);


export const PlaybackRateMn: SxProps<Theme> = (theme) => ({
   
  backgroundImage: `linear-gradient(
                        90deg,
                        ${alpha(getBgStart(activeTheme.tokens), 0.5)},
                        ${alpha(getBgEnd(activeTheme.tokens), 0.5)}
                      )`,
              
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 200ms ease',
                  background: `linear-gradient(
                          ${alpha(getBgStartOverlay(activeTheme.tokens), 0.3)},
                          ${alpha(getBgEndOverlay(activeTheme.tokens), 0.3)}
                        )`,
                },
              
                '&:hover::after': {
                  opacity: 1,
                },
});



