import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';

// Context
import QueryProvider from '../context/QueryProvider';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styles
import PageWrapper from '../styles/components/PageWrapper';
import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import usePersistedState from '../hooks/usePersistedState';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <PageWrapper>
          <Header toggleTheme={toggleTheme} />
          {isMounted && <Component {...pageProps} />}
          <GlobalStyle />
          <Footer />
        </PageWrapper>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default MyApp;
