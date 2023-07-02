import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111111',
    },

    green: {
      50: '#eafbe3',
      100: '#cdeec0',
      200: '#afe19b',
      300: '#90d675',
      400: '#72ca4f',
      500: '#58b035',
      600: '#448928',
      700: '#2f621c',
      800: '#1a3c0e',
      900: '#031600',
    },
  },
});

export default theme;
