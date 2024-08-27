import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    100: '#fff7e2', // Light background
    200: '#ffe9af', // Accent color
    300: '#761941', // Primary color
    400: '#4c102a', // Secondary color
    500: '#220713', // Dark accent
  },
  background: {
    light: '#fff7e2',
    dark: '#220713',
  },
  text: {
    light: '#220713',
    dark: '#ffffff',
  },
  border: {
    light: '#ffe9af',
    dark: '#4c102a',
  },
  hoverBg: {
    light: '#ffe9af',
    dark: '#4c102a',
  },
};

const fonts = {
  heading: '"Coming Soon", cursive, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  subheading: '"Azeret Mono", monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  body: '"Antonio", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      transition: 'all 0.2s',
    },
    variants: {
      solid: (props: { colorMode: string; }) => ({
        bg: props.colorMode === 'light' ? 'brand.300' : 'brand.200',
        color: props.colorMode === 'light' ? 'white' : 'brand.500',
        _hover: {
          bg: props.colorMode === 'light' ? 'brand.400' : 'brand.100',
          transform: 'translateY(-2px)',
          boxShadow: 'md',
        },
      }),
      outline: (props: { colorMode: string; }) => ({
        bg: 'transparent',
        borderColor: props.colorMode === 'light' ? 'brand.300' : 'brand.200',
        color: props.colorMode === 'light' ? 'brand.300' : 'brand.200',
        _hover: {
          bg: props.colorMode === 'light' ? 'brand.100' : 'brand.500',
          color: props.colorMode === 'light' ? 'brand.400' : 'brand.100',
          transform: 'translateY(-2px)',
          boxShadow: 'md',
        },
      }),
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