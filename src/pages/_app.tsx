import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer';

import GlobalStyle from '../styles/global';
import { lightTheme, darkTheme } from '../styles/theme';
import QueryProvider from '../context/QueryProvider';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <QueryProvider>
        <Component {...pageProps} />
        <GlobalStyle />
        <Footer />
      </QueryProvider>
    </ThemeProvider>
  );
};

export default MyApp;
