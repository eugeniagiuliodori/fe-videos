'use client';
import { useTheme, GlobalStyles } from '@mui/material';

export const CssBaseline = () => {
    const theme = useTheme();
  return(
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        fontFamily: 'Arial, Helvetica, sans-serif',
      },
    }}
  />
  )
  }