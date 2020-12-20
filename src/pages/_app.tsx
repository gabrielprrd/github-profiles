import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import QueryProvider from '../context/QueryProvider';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styles
import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <Header toggleTheme={toggleTheme} />
        <Component {...pageProps} />
        <GlobalStyle />
        <Footer />
      </QueryProvider>
    </ThemeProvider>
  );
};

export default MyApp;
