export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  background: '#F9FAFC',
  primary: '#6C8FF8',
  danger: '#FF6B6B',
  grey: {
    light: '#ACBAC3',
  },
  text: {
    primary: '#334154',
    secondary: '#616E7C',
    tertiary: '#AAAAAA',
  },
  quickActions: {
    green: '#E1F5EA',
    orange: '#FEEAD4',
    purple: '#F9F5FF',
    blue: '#E0F5FD',
  },
};

export const sizes = {
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  l: 24,
  xl: 32,
};

export const spacings = {
  padding: sizes.m,
};

export const bottomSpacings = {
  xxs: { marginBottom: sizes.xxs },
  xs: { marginBottom: sizes.xs },
  s: { marginBottom: sizes.s },
  m: { marginBottom: sizes.m },
  l: { marginBottom: sizes.l },
  xl: { marginBottom: sizes.xl },
};

export const fonts = {
  primary: {
    light: 'light',
    regular: 'regular',
    medium: 'medium',
    semiBold: 'semiBold',
    bold: 'bold',
    extraBold: 'extraBold',
  },
};

export const boxShadows = {
  primary: {
    elevation: 3,
    shadowColor: colors.black,
    shadowOpacity: 0.06,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
};
