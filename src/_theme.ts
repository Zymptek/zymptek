import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config : ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    100: '#f2f2f2',
    200: '#e6e6e6',
    300: '#ff8c00',
    400: '#444444',
    500: '#1b1b1b',
  },
  background: {
    light: '#f2f2f2',
    dark: '#003636',
  },
  text: {
    light: '#1b1b1b',
    dark: '#f2f2f2',
  },
  border: {
    light: '#e6e6e6',
    dark: '#444444',
  },
  hoverBg: {
    light: '#e6e6e6',
    dark: '#444444',
  },
};

const fonts = {
  heading: '"Coming Soon", cursive',
  subheading: '"Azeret Mono", monospace',
  body: '"Antonio", sans-serif',
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
    },
    variants: {
      solid: {
        bg: 'brand.300',
        color: 'white'
      },
      outline: {
        borderColor: 'brand.300',
        color: 'brand.300',
        _hover: {
          bg: 'brand.100',
        },
      },
    },
  },
  Text: {
    baseStyle: {
      color: 'text',
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  components,
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'text',
      },
    },
  },
});

export { theme };