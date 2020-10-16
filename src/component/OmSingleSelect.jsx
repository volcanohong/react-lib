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
  }
});

function OmegaSingleSelect(props) {
  const classes = useStyles();
  const { className, lable, options, value, sortingKey, field, width, placeholder, ...others } = props;
  const defValue = value ? value : getDefValue(options, sortingKey);
  // const defValue = value;
  //Note: array of objects can cause unmatch between value and option, and show a lot of warnings
  const handleObjectMatch = (opt, val) => {
    if (field) {
      return opt[field] === val[field];
    }
    return opt === val;
  };

  return (
    <div className={className}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => field ? option[field] : option}
        getOptionSelected={handleObjectMatch}
        style={{ width: width }}
        autoHighlight
        autoComplete
        autoSelect
        value={defValue}
        ListboxProps={{
          style: {
            maxHeight: 200,
            overflow: 'auto',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
          }
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

function getDefValue(options, key) {
  if (!options.length) {
    return null;
  }
  if (!!key) {
    options.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
  }
  return options[0];
}

OmegaSingleSelect.propTypes = {
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  sortingKey: PropTypes.string, // sortingKey: field for sorting, 
  field: PropTypes.string, //field: field for display
  width: PropTypes.number,
  diabled: PropTypes.bool
};

OmegaSingleSelect.defaultProps = {
  options: [],
  width: 200
};

export default React.memo(OmegaSingleSelect);