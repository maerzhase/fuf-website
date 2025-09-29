import React from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import withStyles from "@mui/styles/withStyles";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const LINKS = ["about", "projekte", "themen", "spielplan"];

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1301,
    background:
      "linear-gradient(180deg, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
    ...theme.mixins.gutter(),
  },
  toolbar: {
    display: "flex",
    alignItems: "flex-start",
    ...theme.mixins.maxWidth(),
    width: "100%",
  },
  logo: {
    whiteSpace: "nowrap",
    textDecoration: "none",
  },
  desktopNav: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  mobileNav: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  mobileNavPaper: {
    height: "100%",
    backgroundColor: theme.palette.common.black,
    backgroundImage: "none",
  },
  mobileNavList: {
    width: "100%",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
  },
}));

function LinkTab(props) {
  const { href, ...rest } = props;
  return (
    <Link href={href} passHref>
      <Tab
        component="a"
        sx={{
          minWidth: { xs: "auto", sm: 160 },
          color: "white",
          "&.Mui-selected": {
            color: "white",
          },
        }}
        {...rest}
      />
    </Link>
  );
}

const DesktopNav = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <Tabs
      className={classes.desktopNav}
      indicatorColor="primary"
      value={router.asPath}
      sx={{
        "& .MuiTabs-indicator": {
          top: 0,
          bottom: "auto",
        },
      }}
    >
      <LinkTab href="/" value="/" style={{ display: "none" }} />
      {LINKS.map((l) => (
        <LinkTab key={l} label={l} href={`/${l}`} value={`/${l}`} />
      ))}
    </Tabs>
  );
};

const MobileListItem = withStyles((theme) => {})(ListItem);

const MobileNav = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSame = (l) => (e) => {
    if (router.route === `/${l}`) setIsOpen(false);
  };
  React.useEffect(() => {
    setIsOpen(false);
  }, [router.route]);

  return (
    <div className={classes.mobileNav}>
      <IconButton onClick={toggleDrawer} size="large">
        <MenuIcon />
      </IconButton>
      <Drawer
        classes={{ paper: classes.mobileNavPaper }}
        anchor="top"
        open={isOpen}
        onClose={toggleDrawer}
      >
        <List className={classes.mobileNavList}>
          {LINKS.map((l) => (
            <Link href={`/${l}`} key={l} passHref>
              <MobileListItem button onClick={handleCloseSame(l)}>
                <ListItemText
                  primary={l}
                  primaryTypographyProps={{
                    variant: "h1",
                    align: "center",
                    color: router.asPath === `/${l}` ? "primary" : "inherit",
                  }}
                />
              </MobileListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default function Navigation() {
  const trigger = useScrollTrigger({ threshold: 50 });
  const classes = useStyles();
  return (
    <div>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={0} className={classes.root}>
          <Toolbar disableGutters className={classes.toolbar} position="sticky">
            <Box display="flex" alignItems="flex-start" width="100%">
              <Box
                flexGrow={1}
                display="flex"
                alignItems="center"
                alignSelf="center"
              >
                <Link href="/" passHref>
                  <Typography
                    className={classes.logo}
                    variant="h5"
                    component="a"
                  >
                    frauen und fiktion
                  </Typography>
                </Link>
              </Box>
              <DesktopNav />
              <MobileNav />
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      {null && (
        <Box
          zIndex={100}
          position="fixed"
          bottom={0}
          left={0}
          width="100%"
          height="33vh"
          style={{
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, #ff6e56 100%)",
          }}
        />
      )}
    </div>
  );
}
