import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   root: {
//     margin: theme.spacing(8),
//   },
// }));

const Frau = props => {
  //const classes = useStyles(props);
  const hasProfession = !!props.profession;
  return (
    <React.Fragment>
      <Typography variant="h2" gutterBottom={!hasProfession}>
        {props.name}
      </Typography>
      {hasProfession && (
        <Typography variant="h5" gutterBottom>
          {props.profession}
        </Typography>
      )}
    </React.Fragment>
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
