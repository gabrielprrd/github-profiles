import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url(../assets/fonts/Roboto/Roboto-Medium.ttf) format('truetype');
  }

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
    font-family: 'Roboto', sans-serif;
    font-size: 14px;

    a {
      color: ${({ theme }) => theme.colors.text};
    }
  }



`;

export default GlobalStyle;
