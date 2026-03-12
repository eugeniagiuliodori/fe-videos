import "@mui/material/styles";

declare module "@mui/material/styles" {

    interface PaletteColor {
        states?: {
            hover?: {
                backgroundColor?: string;
                borderColor?: string;
            },
            focus?: {
                backgroundColor?: string;
                borderColor?: string;
            },
            active?: {
                backgroundColor?: string;
                borderColor?: string;
            },
        };
    }

    interface SimplePaletteColorOptions {
        states?: {
            hover?: {
                backgroundColor?: string;
                borderColor?: string;
            },
            focus?: {
                backgroundColor?: string;
                borderColor?: string;
            },
            active?: {
                backgroundColor?: string;
                borderColor?: string;
            },
        };
    }
}