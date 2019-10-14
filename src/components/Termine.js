import React from 'react';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Section from './Section';
import { Anchor as Link } from './Link';
import { humanizeDate } from '../data/dates';

const useStyles = makeStyles(theme => ({
  cell: {
    transition: theme.transitions.color,
    color: theme.palette.common.white,
    borderBottomColor: theme.palette.grey[700],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  row: {
    [theme.breakpoints.down('md')]: {},
    '&:hover $cell': {
      color: theme.palette.primary.main,
    },
  },
  projectTitle: {
    // wordBreak: 'break-all',
    '@global': {
      b: {
        textTransform: 'uppercase',
      },
    },
  },
  location: {
    // wordBreak: 'break-all',
  },
  subText: {
    color: theme.palette.grey[500],
  },
  wrap: {
    wordBreak: 'break-all',
  },
  invisble: {
    visibility: 'hidden',
  },
}));

const TableCell = props => {
  const classes = useStyles(props);
  const { className, ...restProps } = props;
  return (
    <MuiTableCell className={cx(classes.cell, className)} {...restProps} />
  );
};

TableCell.propTypes = {
  className: PropTypes.string,
};

TableCell.defaultProps = {
  className: '',
};

const Termine = props => {
  const classes = useStyles(props);
  const { dates, title } = props;
  if (dates.length === 0) return null;
  const theme = useTheme();
  const matchesDownSm = useMediaQuery(theme.breakpoints.down('xs'));
  const titleType = matchesDownSm ? 'h6' : 'h5';
  const restType = matchesDownSm ? 'caption' : 'h6';
  return (
    <Section centered noMargin>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Table className={classes.table}>
        <TableBody className={classes.cell}>
          {dates.map(d => {
            const hasSubtext = d.text;
            const humanizedDate = humanizeDate(d.date);
            return (
              <TableRow
                key={`${humanizedDate}-${d.title}-${d.text}-${d.location}`}
                className={classes.row}
              >
                <TableCell>
                  <Typography component="span" variant={restType}>
                    {humanizedDate}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    component="span"
                    className={classes.projectTitle}
                    variant={titleType}
                  >
                    <b>{d.title}</b>
                    {hasSubtext && (
                      <Typography
                        variant={restType}
                        component="span"
                        className={classes.subText}
                      >
                        &nbsp;{d.text}
                      </Typography>
                    )}
                  </Typography>
                </TableCell>
                {!matchesDownSm && (
                  <TableCell>
                    <Typography
                      component="span"
                      variant={restType}
                      className={classes.location}
                    >
                      {d.location}
                    </Typography>
                  </TableCell>
                )}
                <TableCell>
                  <Typography component="span" variant={restType}>
                    {d.link && <Link target="_blank" noDecoration href={d.link}>
                                          Link
                                        </Link>}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow className={cx(classes.row, classes.invisble)}>
            <TableCell>
              <Typography component="span" variant={restType}>
                00.00.0000
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                component="span"
                className={cx(classes.projectTitle, classes.wrap)}
                variant={titleType}
              >
                <b>
                  {Array(32)
                    .fill('X')
                    .join('')}
                </b>
                <Typography
                  variant={restType}
                  component="span"
                  className={cx(classes.subText, classes.wrap)}
                >
                  &nbsp;
                  {Array(32)
                    .fill('X')
                    .join('')}
                </Typography>
              </Typography>
            </TableCell>
            {!matchesDownSm && (
              <TableCell>
                <Typography
                  className={classes.wrap}
                  component="span"
                  variant={restType}
                >
                  {Array(40)
                    .fill('X')
                    .join('')}
                </Typography>
              </TableCell>
            )}
            <TableCell>
              <Typography component="span" variant={restType}>
                Link
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  );
};

Termine.propTypes = {
  dates: PropTypes.array,
  title: PropTypes.string.isRequired,
};

Termine.defaultProps = {
  dates: [],
  title: '',
};

export default Termine;
