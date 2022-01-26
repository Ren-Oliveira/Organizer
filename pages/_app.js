import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import Sidebar from "../components/Sidebar/Drawer";

function Home({ Component, pageProps }) {
  return (
    <Sidebar>
      <CssBaseline />
      <Component {...pageProps} />
    </Sidebar>
  );
}

export default Home;
