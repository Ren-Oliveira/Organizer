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
            margin: "0.5rem",
          }}
        >
          {/* background */}
          <div
            style={{
              height: "20vh",
              width: "10vw",
              margin: "0.5rem",
              border: "4px solid #08657d",
              background: "linear-gradient(315deg, #171717 0%, #070707 100%)",
            }}
          />
          {/* sidebar */}
          <div
            style={{
              height: "20vh",
              width: "10vw",
              margin: "0.5rem",
              border: "4px solid #08657d",
              backgroundColor: "#211422",
            }}
          />
          {/* text */}
          <div
            style={{
              height: "20vh",
              width: "10vw",
              margin: "0.5rem",
              border: "4px solid #08657d",
              backgroundColor: "#DEADAD",
            }}
          />
          {/* items */}
          <div
            style={{
              height: "20vh",
              width: "7vw",
              margin: "0.5rem",
              border: "4px solid #08657d",
              backgroundColor: "#192333",
            }}
          />
          <div
            style={{
              height: "20vh",
              width: "7vw",
              margin: "0.5rem",
              border: "4px solid #08657d",
              backgroundColor: "#102333",
            }}
          />
          <div
            style={{
              height: "20vh",
              width: "5vw",
              margin: "1rem 0.3rem",
              border: "4px solid #DEADAD",
              backgroundColor: "#960400",
            }}
          />
          <div
            style={{
              height: "20vh",
              width: "5vw",
              margin: "1rem 0.3rem",
              border: "4px solid #DEADAD",
              backgroundColor: "#023d07",
            }}
          />
          <div
            style={{
              height: "20vh",
              width: "5vw",
              margin: "1rem 0.3rem",
              border: "4px solid #DEADAD",
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
