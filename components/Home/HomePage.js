import { Grid, Button, Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import uniqid from "uniqid";

const HomePage = () => {
  const tabs = ["tasks", "expenses", "routine"];

  const inputTheme = createTheme({
    palette: {
      secondary: { main: "#DEADAD" },
    },
  });

  return (
    <ThemeProvider theme={inputTheme}>
      <div style={{ margin: "2rem" }}>
        <Divider>
          <Typography variant="h4" color="#DEADAD">
            Welcome to a sometimes usefull page!
          </Typography>
        </Divider>

        <div
          style={{
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1rem",
          }}
        >
          <div
            style={{
              height: "20vh",
              width: "10vw",
              margin: "1rem",
              border: "2px solid #22ffff",
              background: "linear-gradient(315deg, #171717 0%, #070707 100%)",
            }}
          />

          <div
            style={{
              height: "20vh",
              width: "10vw",
              margin: "1rem",
              border: "2px solid #22ffff",
              backgroundColor: "#211422",
            }}
          />

          <div
            style={{
              height: "20vh",
              width: "10vw",
              margin: "1rem",
              border: "2px solid #22ffff",
              backgroundColor: "#2A3A4A",
            }}
          />

          <div
            style={{
              height: "20vh",
              width: "10vw",
              margin: "1rem",
              border: "2px solid White",
              backgroundColor: "#DEADAD",
            }}
          />

          <div
            style={{
              height: "20vh",
              width: "5vw",
              margin: "1rem 0.3rem",
              border: "2px solid #DEADAD",
              backgroundColor: "#960400",
            }}
          />

          <div
            style={{
              height: "20vh",
              width: "5vw",
              margin: "1rem 0.3rem",
              border: "2px solid #DEADAD",
              backgroundColor: "#023d07",
            }}
          />

          <div
            style={{
              height: "20vh",
              width: "5vw",
              margin: "1rem 0.3rem",
              border: "2px solid #DEADAD",
              backgroundColor: "#08657d",
            }}
          />
        </div>

        <Divider>
          <Typography variant="h5" color="#DEADAD">
            Navigate
          </Typography>
        </Divider>
        <Grid container direction="row" justifyContent="center">
          {tabs.map((tab) => {
            return (
              <Grid item margin="0.75rem 1.5rem" key={uniqid()}>
                <Link href={tab}>
                  <Button
                    color="secondary"
                    variant="text"
                    sx={{ padding: "0.5rem" }}
                  >
                    {tab}
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
