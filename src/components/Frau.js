import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { Anchor } from './Link';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: props => (props.gutterBottom ? theme.spacing(8) : null),
  },
}));

const Frau = props => {
  const classes = useStyles(props);
  const hasProfession = !!props.profession;
  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom={!hasProfession}>
        <Anchor noDecoration href={props.href} target="_blank">
          {props.name}
        </Anchor>
      </Typography>
      {hasProfession && (
        <Typography variant="h5" gutterBottom>
          {props.profession}
        </Typography>
      )}
    </div>
  );
};

Frau.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string,
};

Frau.defaultProps = {
  profession: null,
};

export default Frau;
