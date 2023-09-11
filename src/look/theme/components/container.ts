const baseStyle = () => ({
  position: 'relative',
  margin: '0 auto',
  p: {
    base: '0 15px',
  },
  width: '100%',
  maxW: {
    base: 'auto',
    md: '980px',
    xl: '1300px',
  },
});

const sectionStyle = () => ({
  position: 'relative',
  margin: '0 auto',
  p: {
    base: '60px 15px',
    lg: '120px 15px',
  },
  width: '100%',
  maxW: {
    base: 'auto',
    md: '980px',
    xl: '1410px',
  },
});

const variants = {
  base: baseStyle,
  section: sectionStyle,
};

const defaultProps = {
  variant: 'base',
};

const container = {
  baseStyle: {},
  variants,
  sizes: {},
  defaultProps,
};

export default container;
