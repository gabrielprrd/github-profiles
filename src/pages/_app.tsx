import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer';

import GlobalStyle from '../styles/global';
import { lightTheme, darkTheme } from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
