import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      tertiary: {
        main: string;
        light: string;
        dark: string;
      };
      mainBg: {
        main: string;
        light: string;
        dark: string;
      };
      textOnPrimary: string;
      textOnSecondary: string;
      textOnTertiary: string;

      contrastText: string;
      wrong: string;
      success: string;
    };
    borderRadius: string;
    boxShadow: string;
  }
}
