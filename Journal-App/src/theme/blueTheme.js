import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
    // palette: {
    //     primary: {
    //         main: "#262254"
    //     },
    //     secondary: {
    //         main: "#543884"
    //     },
    //     error: {
    //         main: red.A400
    //     }
    // }
    palette: {
        primary: {
            main: "rgb(6, 65, 79)"
        },
        secondary: {
            main: "rgb(8, 141, 174)"
        },
        error: {
            main: red.A400
        }
    }
})