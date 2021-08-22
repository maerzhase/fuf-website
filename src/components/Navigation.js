import React from 'react';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import {makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useRouter } from 'next/router'


const LINKS = ['about', 'projekte', 'themen', 'spielplan']

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
    ...theme.mixins.gutter(),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'flex-start',
    ...theme.mixins.maxWidth(),
    width: "100%",
  },
  logo: {
    whiteSpace: 'nowrap',
  }
}));

function LinkTab(props) {
  const { href, ...rest } = props;
  return (
    <Link href={href} passHref>
      <Tab
        component="a"
        {...rest}
      />
    </Link>
  );
}

export default function Header() {
  const trigger = useScrollTrigger({threshold: 50});
  const classes = useStyles();
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={0} className={classes.root}>
          <Toolbar disableGutters className={classes.toolbar} position="sticky">
            <Box display="flex" alignItems="flex-start" width="100%">
              <Box flexGrow={1} display="flex" alignItems="center" alignSelf="center">
                <Link href="/">
                  <a>
                    <Typography className={classes.logo} variant="h5">Frauen und Fiktion</Typography>
                  </a>
                </Link>
              </Box>
              <Tabs indicatorColor="primary" value={router.asPath}>
                {LINKS.map(l => <LinkTab key={l} label={l} href={`/${l}`} value={`/${l}`} />)}
              </Tabs>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      <Box zIndex={100} position="fixed" bottom={0} left={0} width="100%" height="33vh" style={{pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #ff6e56 100%)'}} />
    </div>
  )
}
