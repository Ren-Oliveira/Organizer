import { Grid, Button, Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import uniqid from "uniqid";

const HomePage = () => {
  const tabs = ["tasks", "expenses", "routine"];

  const inputTheme = createTheme({
    palette: {
      secondary: { main: "#f5deb3" },
    },
  });

  return (
    <ThemeProvider theme={inputTheme}>
      <div style={{ margin: "2rem", color: "white" }}>
        <Divider>
          <Typography variant="h4" color="wheat">
            Welcome to a sometimes usefull page!
          </Typography>
        </Divider>

        <Button sx={{ height: "60vh" }} />

        <Divider>
          <Typography variant="h5" color="wheat">
            Navigate
          </Typography>
        </Divider>
        <Grid container direction="row" justifyContent="center">
          {tabs.map((tab) => {
            return (
              <Grid item margin="0.75rem 1rem" key={uniqid()}>
                <Link href={tab}>
                  <Button color="secondary" variant="text">
                    <strong>{tab}</strong>
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </ThemeProvider>
  );
};
export default HomePage;
