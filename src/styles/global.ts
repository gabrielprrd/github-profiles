import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
