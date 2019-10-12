import React from 'react';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Section from './Section';
import Link from './Link';

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
  return (
    <Section centered noMargin>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Table className={classes.table}>
        <TableBody className={classes.cell}>
          {dates.map(d => {
            const hasSubtext = d.text;
            return (
              <TableRow
                key={`${d.date}-${d.title}-${d.text}-${d.location}`}
                className={classes.row}
              >
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
          <TableRow className={cx(classes.row, classes.invisble)}>
            <TableCell>
              <Typography component="span" variant="h6">
                00.00.0000
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                component="span"
                className={cx(classes.projectTitle, classes.wrap)}
                variant="h5"
              >
                <b>
                  {Array(32)
                    .fill('X')
                    .join('')}
                </b>
                <Typography
                  variant="h6"
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
            <TableCell>
              <Typography
                className={classes.wrap}
                component="span"
                variant="h6"
              >
                {Array(40)
                  .fill('X')
                  .join('')}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography component="span" variant="h6">
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
