import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#2e8b57",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover fieldset": {
            borderColor: "#2e8b57",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#2e8b57",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2e8b57",
          },
        },
      },
    },
  },
});

export default theme;
