import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

const FormLayout = (props) => {
  const inputTheme = createTheme({
    palette: {
      secondary: { main: "#f5deb3" },
      error: { main: "#FF6666" },
    },
  });

  return (
    <ThemeProvider theme={inputTheme}>
      <Grid
        container
        spacing={0}
        style={{ width: "90vw" }}
        margin="1.5rem 2rem"
        justifyContent="center"
      >
        {props.children}
      </Grid>
    </ThemeProvider>
  );
};

export default FormLayout;
