import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
  },
  desktopNav: {
    [theme.breakpoints.down("md")]: {
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
  },
  mobileNavList: {
    width: '100%',
    position: 'absolute',
    top: "50%",
    transform: 'translate(0, -50%)',
  }
}));

function LinkTab(props) {
  const { href, ...rest } = props;
  return (
    <Link href={href} passHref>
      <Tab component="a" {...rest} />
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
    >
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
  React.useEffect(() => {
    setIsOpen(false);
  }, [router.route]);
  return (
    <div className={classes.mobileNav}>
      <IconButton onClick={toggleDrawer}>
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
            <Link               href={`/${l}`}
              key={l} passHref>
            <MobileListItem
              button
            >
              <ListItemText
                primary={l}
                primaryTypographyProps={{ variant: "h1", align: "center", color: router.asPath === `/${l}` ? 'primary' : 'default' }}
              />
            </MobileListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default function Header() {
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
                <Link href="/">
                  <a>
                    <Typography className={classes.logo} variant="h5">
                      Frauen und Fiktion
                    </Typography>
                  </a>
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
