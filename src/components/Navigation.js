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


const LINKS = ['about', 'projekte', 'themen', 'spielplan']

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'transparent',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'flex-start',
  }
}));

export default function Header() {
  const trigger = useScrollTrigger();
  const classes = useStyles();
  return (
    <div>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={0} className={classes.root}>
          <Toolbar disableGutters className={classes.toolbar} position="sticky">
            <Box display="flex" alignItems="flex-start" width="100%">
              <Box flexGrow={1} display="flex" alignItems="center" alignSelf="center">
                <Link href="/">
                  <a>
                    <Typography variant="h5">Frauen und Fiktion</Typography>
                  </a>
                </Link>
              </Box>
              <Tabs value="about">
                {LINKS.map(l => <Tab key={l} value={l} label={l}/>)}
              </Tabs>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
    </div>
  )
}
