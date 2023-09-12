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
      h1: {
        fontFamily: 'orbitron',
        fontSize: '89px',
        lineHeight: '89px',
        fontWeight: '700',
        letterSpacing: '-2.67px',
        mb: 0,
      },
      h2: {},
      h3: {
        fontFamily: 'orbitron',
        fontSize: '22px',
        fontWeight: '900',
      },
      h4: {},
      select: {
        px: '20px',
      },
      '.chakra-select__icon-wrapper': {
        right: '20px !important',
      },
    }),
  },
};

export default styles;
