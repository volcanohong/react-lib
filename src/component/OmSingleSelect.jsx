import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    }
  },
  listboxProp: {
    maxHeight: 200,
    overflow: 'auto',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  }
});

function OmSingleSelect(props) {
  const classes = useStyles();
  const { lable, options, width, field, placeholder, ...others } = props;

  //Note: array of objects can cause unmatch between value and option, and show a lot of warnings
  const handleObjectMatch = (opt, val) => {
    if (field) {
      return opt[field] === val[field];
    }
    return opt === val;
  }

  return (
    <div className={props.className}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => field ? option[field] : option}
        getOptionSelected={handleObjectMatch}
        style={{ width: width }}
        autoHighlight
        autoComplete
        autoSelect
        ListboxProps={{
          classes: { root: classes.listboxProp }
        }}
        renderOption={(option) => {
          return (
            <React.Fragment>
              <span style={{ color: 'grey' }}>{field ? option[field] : option}</span>
            </React.Fragment>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={lable}
            style={{ fontSize: 10 }}
            placeholder={placeholder}
          />
        )}
        {...others}
      />
    </div>
  );
}

OmSingleSelect.propTypes = {
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  field: PropTypes.string,
  width: PropTypes.number,
  diabled: PropTypes.bool
};

OmSingleSelect.defaultProps = {
  options: [],
  width: 200
};

export default React.memo(OmSingleSelect);