import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body {
    min-height: 100vh;
    width: 100%;
    overflow: auto;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};

    a {
      color: ${({ theme }) => theme.colors.text};
    }
  }

`;

export default GlobalStyle;
