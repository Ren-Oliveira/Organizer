import Link from "next/link";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  CssBaseline,
} from "@mui/material/";
import {
  FaChevronRight,
  FaChevronLeft,
  FaListUl,
  FaTasks,
  FaChartPie,
  FaFolder,
  FaFolderOpen,
  FaCookie,
  FaCookieBite,
  FaExclamation,
  FaQuestion,
} from "react-icons/fa";
import { RiPieChartFill, RiLockFill, RiLockUnlockFill } from "react-icons/ri";
import LinkName from "./UI/DrawerLink";
import classes from "./Drawer.module.css";

const drawerWidth = 180;

const openedDrawer = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedDrawer = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 0),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedDrawer(theme),
    "& .MuiDrawer-paper": openedDrawer(theme),
  }),
  ...(!open && {
    ...closedDrawer(theme),
    "& .MuiDrawer-paper": closedDrawer(theme),
  }),
}));

export default function Sidebar(props) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        anchor="left"
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#2a1a2a",
            color: "#f5deb3",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} className={classes.icon}>
            {!open ? <FaChevronRight /> : <FaChevronLeft />}
          </IconButton>
        </DrawerHeader>

        <List>
          <Link href="/">
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                {!open ? <FaFolder /> : <FaFolderOpen />}
              </ListItemIcon>
              <LinkName title="Home" />
            </ListItem>
          </Link>
          <br />

          <Link href="/tasks">
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                {open ? <FaTasks /> : <FaListUl />}
              </ListItemIcon>
              <LinkName title="Task" subtitle="MANAGER" />
            </ListItem>
          </Link>

          <Link href="/expenses">
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                {open ? <FaChartPie /> : <RiPieChartFill />}
              </ListItemIcon>
              <LinkName title="Expense" subtitle="TRACKER" />
            </ListItem>
          </Link>

          <Link href="/routine">
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                {!open ? <FaCookie /> : <FaCookieBite />}
              </ListItemIcon>
              <LinkName title="Routine" subtitle="TRACKER" />
            </ListItem>
          </Link>
          <br />

          <Link href="/qna">
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                {!open ? <FaQuestion /> : <FaExclamation />}
              </ListItemIcon>
              <LinkName title="Q & A" />
            </ListItem>
          </Link>

          <br />

          <Link href="/Login">
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                {!open ? <RiLockFill /> : <RiLockUnlockFill />}
              </ListItemIcon>
              <LinkName title="Login" />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <Box
        className={classes.bg}
        component="main"

        // sx={{
        //   position: "absolute",
        //   width: "100%",
        //   p: 1,
        //   background: "#242431",
        //   background: "linear-gradient(130deg, #242431 0%, #242420 100%)",
        //   minHeight: "100vh",
        //   overflowY: "hidden",
        // }}
      >
        {/* <DrawerHeader /> */}
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
          onClick={handleDrawerClose}
        >
          {props.children}
        </div>
      </Box>
    </Box>
  );
}
