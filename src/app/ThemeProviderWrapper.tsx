"use client"
import { createContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeVariablesWrapper } from './styles/ThemeVariablesWrapper';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { mapTokensToMUITheme } from '@/app/styles/mapTokensToMUITheme';
import { lightTheme, darkTheme, AppTheme } from '@/types/tokens';
import { createTheme } from '@mui/material/styles';

type ThemeContextType = {
  activeTheme: AppTheme;
  setActiveTheme: (theme: AppTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  activeTheme: lightTheme,
  setActiveTheme: () => {},
});

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  
  const [activeTheme, setActiveTheme] = useState<AppTheme>(lightTheme);
  
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

  const muiTheme = useMemo(() => {
    const theme = mapTokensToMUITheme(activeTheme);
    return createTheme(theme); //envolver de nuevo en createTheme para que MUI reconozca cambio
  }, [activeTheme]);
  
 return (
  <AppRouterCacheProvider>
      <StyledEngineProvider injectFirst>
        {
          mounted ?
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
                <ThemeVariablesWrapper tokens={activeTheme.tokens} />
                {children}
            </ThemeContext.Provider>
          </ThemeProvider>
          : 
          <div>loading...</div>
        }
      </StyledEngineProvider>
  </AppRouterCacheProvider>
);
}