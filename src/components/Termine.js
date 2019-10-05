import React from 'react';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import Section from './Section';
import Link from './Link';

moment.locale('de');

const useStyles = makeStyles(theme => ({
  cell: {
    transition: theme.transitions.color,
    color: theme.palette.common.white,
    borderBottomColor: theme.palette.grey[700],
  },
  row: {
    '&:hover $cell': {
      color: theme.palette.primary.main,
    },
  },
  projectTitle: {
    '@global': {
      b: {
        textTransform: 'uppercase',
      },
    },
  },
  subText: {
    color: theme.palette.grey[500],
  },
}));

const TableCell = props => {
  const classes = useStyles(props);
  const { className, ...restProps } = props;
  return (
    <MuiTableCell className={cx(classes.cell, className)} {...restProps} />
  );
};

const Termine = props => {
  const classes = useStyles(props);
  const { dates, title } = props;
  if (dates.length === 0) return null;
  return (
    <Section centered>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Table className={classes.table}>
        <TableBody className={classes.cell}>
          {dates.map(d => {
            const hasSubtext = d.text;
            return (
              <TableRow className={classes.row}>
                <TableCell>
                  <Typography component="span" variant="h6">
                    {d.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    component="span"
                    className={classes.projectTitle}
                    variant="h5"
                  >
                    <b>{d.title}</b>
                    {hasSubtext && (
                      <Typography
                        variant="h6"
                        component="span"
                        className={classes.subText}
                      >
                        &nbsp;{d.text}
                      </Typography>
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography component="span" variant="h6">
                    {d.location}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography component="span" variant="h6">
                    <Link target="_blank" noDecoration href={d.link}>
                      Link
                    </Link>
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Section>
  );
};

Termine.defaultProps = {
  dates: [],
  title: '',
};

export default Termine;
