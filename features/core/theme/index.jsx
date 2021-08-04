import {
  createTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

const interFontFamily = '"Inter", sans-serif';
const frankRuhlFontFamily = '"Frank Ruhl Libr", serif';

const extraColors = {
  base: {
    light: 'red',
  },
  statusDefault: {
    light: '#eff0f1',
    main: '#9fa6b2',
    dark: '#7e8796', // Not provided by designer
  },
  accent1: {
    light: '#feecc3',
    main: '#fec547',
    dark: '#b28624', // Not provided by designer
  },
  accent2: {
    light: '#f6e5fa',
    main: '#dea8ee',
    dark: '#af72c1', // Not provided by designer
  },
  accent3: {
    light: '#e6f9f3',
    main: '#82e1c1',
    dark: '#56b293', // Not provided by designer
  },
  accent4: {
    light: '#ffe8d3',
    main: '#ffb16b',
    dark: '#c77d3b', // Not provided by designer
  },
};

const palette = {
  background: {
    default: '#f5f7fb',
  },
  primary: {
    light: '#9badea',
    main: '#385bd5',
    dark: '#2f4db5',
  },
  secondary: {
    light: '#ffaab6',
    main: '#ff566e',
    dark: '#d9495d',
  },
  error: {
    light: '#f7e1df',
    main: '#e93a2d',
    dark: '#b8190d', // Not provided by designer
  },
  warning: {
    light: '#fff4e5',
    main: '#feb24e',
    dark: '#ef9825', // Not provided by designer
  },
  info: {
    light: '#e4effb',
    main: '#89b8ed',
    dark: '#6392c7', // Not provided by designer
  },
  success: {
    light: '#e5f3e8',
    main: '#53b067',
    dark: '#2a6937', // Not provided by designer
  },
  text: {
    primary: '#4f5f79',
    secondary: '#14294c',
  },
  divider: '#ECEDEF',
};

// A dummy theme to access theme utils
const dummyTheme = createTheme();

const aboveSmallestScreenWidth = 330;

const borderRadius = 10;

// Material UI default theme => https://material-ui.com/customization/default-theme/
const theme = createTheme({
  palette,
  shape: {
    borderRadius,
  },
  typography: {
    fontFamily: interFontFamily,
    h1: {
      fontFamily: frankRuhlFontFamily,
      fontSize: 50,
      fontWeight: 700,
      color: palette.text.secondary,
      lineHeight: 1.4,
    },
    h2: {
      fontFamily: frankRuhlFontFamily,
      fontSize: 42,
      fontWeight: 700,
      color: palette.text.secondary,
    },
    h3: {
      fontFamily: frankRuhlFontFamily,
      fontSize: 24,
      fontWeight: 700,
      color: palette.text.secondary,
    },
    h4: {
      fontFamily: frankRuhlFontFamily,
      fontSize: 20,
      fontWeight: 700,
      color: palette.text.secondary,
    },
    h5: {
      fontFamily: interFontFamily,
      fontSize: 20,
      fontWeight: 600,
      color: palette.text.primary,
    },
    h6: {
      fontFamily: interFontFamily,
      fontSize: 18,
      fontWeight: 700,
      color: palette.text.primary,
    },
    subtitle1: {
      fontFamily: interFontFamily,
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.068rem',
      [dummyTheme.breakpoints.up('md')]: {
        fontSize: '1rem',
        letterSpacing: '0.078rem',
      },
    },
    subtitle2: {
      fontFamily: interFontFamily,
      fontSize: '0.875rem',
      fontWeight: 600,
      letterSpacing: '0.004rem',
      [dummyTheme.breakpoints.up('md')]: {
        fontSize: '1rem',
        letterSpacing: 'normal',
      },
    },
    body1: {
      fontSize: '1.125rem',
      [dummyTheme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
      },
      '& a': {
        fontWeight: 500,
        [dummyTheme.breakpoints.up(aboveSmallestScreenWidth)]: {
          fontWeight: 600,
        },
      },
    },
    body2: {
      fontSize: '1rem',
      [dummyTheme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
      '& a': {
        fontWeight: 500,
        [dummyTheme.breakpoints.up(aboveSmallestScreenWidth)]: {
          fontWeight: 600,
        },
      },
    },
    caption: {
      fontSize: '0.875rem',
      [dummyTheme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
      '& a': {
        fontWeight: 500,
        [dummyTheme.breakpoints.up(aboveSmallestScreenWidth)]: {
          fontWeight: 600,
        },
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      [dummyTheme.breakpoints.up(aboveSmallestScreenWidth)]: {
        fontWeight: 600,
      },
    },
  },
  overrides: {
    MuiCardHeader: {
      root: {
        [dummyTheme.breakpoints.up('sm')]: {
          padding: dummyTheme.spacing(3),
        },
        [dummyTheme.breakpoints.up('md')]: {
          padding: dummyTheme.spacing(4),
        },
      },
    },
    MuiCardContent: {
      root: {
        [dummyTheme.breakpoints.up('sm')]: {
          padding: dummyTheme.spacing(3),
        },
        [dummyTheme.breakpoints.up('md')]: {
          padding: dummyTheme.spacing(4),
          paddingBottom: dummyTheme.spacing(4),
        },
      },
    },
    MuiButton: {
      outlined: {
        borderColor: palette.text.primary,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: borderRadius / 2,
      },
      input: {
        padding: dummyTheme.spacing(1.75),
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          borderRadius: borderRadius / 2,
        },
      },
    },
    MuiMenu: {
      paper: {
        borderRadius: borderRadius / 2,
      },
    },
    MuiList: {
      root: {
        '& .Mui-selected, .MuiListItem-root.Mui-selected': {
          color: palette.primary.main,
          backgroundColor: palette.background.default,
          '& .MuiListItemIcon-root': {
            color: palette.primary.main,
          },
          '&:hover': {
            backgroundColor: palette.background.default,
          },
        },
        '& .MuiListItem-button': {
          color: palette.text.secondary,
          '&:hover': {
            backgroundColor: palette.background.default,
          },
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 'unset',
        marginRight: dummyTheme.spacing(2),
        color: palette.text.primary,
        fontSize: '1.2rem',
      },
    },
  },
});

const rTheme = responsiveFontSizes(theme, {
  variants: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'button',
  ],
});


export default rTheme;

export {
  extraColors,
};
