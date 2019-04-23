import { createMuiTheme } from '@material-ui/core/es/styles';
import * as colors from './colors';

export const ResumeTheme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            light: colors.primaryColorLight,
            main: colors.primaryColor,
            dark: colors.primaryColorDark,
            contrastText: colors.primaryTextColor
        },
        secondary: {
            light: colors.accentColorLight,
            main: colors.accentColor,
            dark: colors.accentColorDark,
            contrastText: colors.primaryTextColor
        },
        error: {
            main: colors.errorColor
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    }
});
