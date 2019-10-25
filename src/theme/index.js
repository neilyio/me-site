const spacing = {
    xl: '6rem',
    lg: '4rem',
    md: '2.75rem',
    sm: '1rem',
    xs: '0.5rem',
};

const breakpoints = {
    xs: '600px',
    sm: '768px',
    md: '960px',
    lg: '1280px',
    xl: '1820px',
};

const zIndex = {};

const transitions = {
    easing: {
        easeIn: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
    duration: {
        standard: '0.3s',
    },
};

const palette = {
    common: {
        black: "#000",
        white: "#fff",
    },
    primary: {
        light: "#757de8",
        main: "#3f51b5",
        dark: "#002984",
        contrastText: "#fff",
    },
    secondary: {
        light: "#ff4081",
        main: "#00a7f8",
        dark: "#67d8ff",
        contrastText: "#fff",
    },
    error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff",
    },
    grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#d5d5d5",
        A200: "#aaaaaa",
        A400: "#303030",
        A700: "#616161",
    },
    text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)",
        divider: "rgba(0, 0, 0, 0.12)",
    },
    background: {
        paper: "#fff",
        default: "#fafafa",
    },
    action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(0, 0, 0, 0.14)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
};

const shadows = {};

const typography =  {
    fontFamilyPrimary: "Exo",
    fontFamilySecondary: "Open Sans",
    h2: {
        color: 'black',
        fontFamily: "Exo",
        fontWeight: 700,
        fontSize: "4em",
        fontStyle: "italic",
        lineHeight: "1.25em",
        letterSpacing: null,
        margin: "0"
    },
    h3: {
        color: 'black',
        fontFamily: "Exo",
        fontWeight: 700,
        fontSize: "2.5em",
        fontStyle: "italic",
        lineHeight: "1.25em",
        letterSpacing: null,
        margin: "0"
    },
    h4: {
        color: 'black',
        fontFamily: "Exo",
        fontWeight: 700,
        fontSize: "1.5em",
        fontStyle: "italic",
        lineHeight: "1.25em",
        letterSpacing: null,
        margin: "0"
    },
    h5: {
        color: 'black',
        fontFamily: "Exo",
        fontWeight: 300,
        fontSize: "1.2em",
        fontStyle: "italic",
        lineHeight: "1.25em",
        letterSpacing: null,
        margin: "0"
    },
    p: {
        color: 'black',
        fontFamily: "Open Sans",
        fontWeight: 300,
        fontSize: "1em",
        fontStyle: "normal",
        lineHeight: "1.9em",
        letterSpacing: null,
        margin: "0"
    },
    small: {
        color: 'black',
        fontFamily: "Open Sans",
        fontWeight: 300,
        fontSize: "0.75em",
        fontStyle: "normal",
        lineHeight: "1.25em",
        letterSpacing: null,
        margin: "0"
    }
};

const theme = {
    breakpoints: breakpoints,
    typography: typography,
    palette: palette,
    zIndex: zIndex,
    spacing: spacing, 
    shadows: shadows,
    transitions: transitions,
};

export default theme;
