// src/contexts/ThemeContext.tsx
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0a192f',
    },
    secondary: {
      main: '#64ffda',
    },
    background: {
      default: '#010b13',  // Page background
      paper: '#0a192f',   
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
});

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
