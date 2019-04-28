import { createMuiTheme } from '@material-ui/core/es/styles';
import * as colors from './colors';

export const ResumeTheme = createMuiTheme({
    overrides: {
        MuiChip: {
            text: {
                // Some CSS
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
            }
        }
    },
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
