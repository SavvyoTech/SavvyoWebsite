'use client';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const styles = {
    fontFamily: "'Inter', sans-serif",
    baseColor: "#ffffff",
    primaryColor: "#101828",
    secondaryColor: "#F40009",
    ternaryColor: "#D0D5DD",
    h2Color: "#475467",
    bodyColor: "#101828",
    h1: "3.75rem",
    h2: "3rem",
    h3: "2.25rem",
    h4: "1.5rem",
    body: "1rem",
    bodySmall: "0.875rem",
    bodyXSmall: "0.75rem",
    bodyLarge: "1.25rem",
};

const theme = createTheme({
  typography: {
    fontFamily: styles.fontFamily,
    h1: {
      fontSize: styles.h1,
      color: styles.h2Color,
    },
    h2: {
      fontSize: styles.h2,
      color: styles.h2Color,
    },
    h3: {
      fontSize: styles.h3,
      color: styles.h2Color,
    },
    h4: {
      fontSize: styles.h4,
      color: styles.h2Color,
    },
    body1: {
      fontSize: styles.body,
      color: styles.bodyColor,
    },
    body2: {
      fontSize: styles.bodySmall,
      color: styles.bodyColor,
    },
    subtitle1: {
      fontSize: styles.bodyLarge,
      color: styles.bodyColor,
    },
    button: {
      textTransform: 'none',
    }
  },
  palette: {
    primary: {
      main: styles.primaryColor,
    },
    secondary: {
      main: styles.secondaryColor,
    },
    text: {
      primary: styles.bodyColor,
      secondary: styles.h2Color,
    },
    background: {
      default: styles.baseColor,
    },
  },
});

const ThemeWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
    );
};

export default ThemeWrapper;
