import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      body: {
        fontFamily: 'poppins',
        color: 'white',
        bg: 'gradient.60',
        lineHeight: 'base',
        flexGrow: 1,
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      'html, input, textarea, button': {
        fontFamily: 'poppins',
        fontDisplay: 'fallback',
      },
    }),
  },
};

export default styles;
