// theme.ts
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('bg.white', 'bg.dark')(props),
    },
  }),
};

const colors = Object.freeze({
  bg: {
    dark: '#121316',
    white: '#fff',
  },
  brand: {
    primary: '#3155A2',
    accent: '#FFB223',
    secondary: '#191A1D',
    neutral: { 100: '#f7f7f7', 200: '#ddd', 300: '#eee' },
  },
  button: {
    primary: {
      main: '#3155A2',
      hover: '#1B4192',
    },
    secondary: '#121212',
  },
});

const theme = extendTheme({
  config,
  colors,
  styles,
});

export default theme;
