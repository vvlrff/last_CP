import { FC, ReactNode } from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
// import themeConfig from "../config/themeConfig";

interface IThemeProvider {
    children: ReactNode;
}

declare module "@mui/material/styles" {
    interface TypographyVariants {
        highlighted: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        highlighted?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        highlighted: true;
    }
}

const MyThemeProvider: FC<IThemeProvider> = ({ children }) => {
    let theme = createTheme({
        palette: {
            // type: "light",
            primary: {
                // main: themeConfig.primary.main,
                main: "#fff",
            },
            secondary: {
                main: "#7036bb",
            },
            background: {
                default: "#121212",
                paper: "#000",
            },
            // divider: "#FA0644",
            text: {
                primary: "#fff",
                // secondary: '#fff'
            },
        },
        typography: {
            h2: {
                fontWeight: 600,
            },
            h3: {
                fontWeight: 600,
            },
            body1: {
                lineHeight: "26px",
            },
            highlighted: {
                display: "block",
                width: "fit-content",
                color: "white",
                backgroundColor: "#F0CD06",
                textAlign: "center",
            },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    colorPrimary: {
                        backgroundColor: "#121212",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    containedPrimary: {
                        borderRadius: "6px",
                        fontWeight: 600,
                    },
                    contained: {
                        fontWeight: 600,
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        // Some CSS
                        color: "#fff",
                    },
                },
            },
            MuiMenuItem: {
                styleOverrides: {},
            },
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        // Map the new variant to render a <h1> by default
                        // highlighted: 'h4',
                    },
                },
            },
        },
    });
    theme = responsiveFontSizes(theme);

    // console.log(theme);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
