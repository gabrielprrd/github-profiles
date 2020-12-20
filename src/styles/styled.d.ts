// Define types to the theme
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      text: string;
      highlightPrimary: string;
      highlightSecondary: string;
    };

    borderRadius: string;
    padding: string;
  }
}
