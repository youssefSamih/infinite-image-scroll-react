import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      weight: {
        hairline: string;
        thin: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
      };
      size: {
        xs: string;
        sm: string;
        sm2: string;
        base: string;
        lg: string;
        xl: string;
        xl2: string;
        xl3: string;
        xl4: string;
        xl5: string;
        xl6: string;
        xl7: string;
        xl8: string;
        xl9: string;
        xl10: string;
        xl11: string;
      };
    };
    colors: {
      black: {
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        900: string;
      };
      grey: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      white: string;
      lightCoral: string;
      vividTangerine: string;
      primary: {
        lightest: string;
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
      };
      stateColors:
        | {
            danger: {
              light: string;
              main: string;
              dark: string;
            };
            success: {
              light: string;
              main: string;
              dark: string;
            };
          }
        | any;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
