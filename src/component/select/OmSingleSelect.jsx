import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import OmSelectStyle from './OmSelectStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import OmBaseStyle from "../OmBaseStyle";

// export const OmSingleSelect = (props) => {
function OmSingleSelect(props) {
  const {
    className,
    label,
    options,
    value,
    sortingKey,
    field,
    width,
    placeholder,
    classes,
    ...others
  } = props;
  const defValue = value;
  // Note: array of objects can cause unmatch between value and option, and show a lot of warnings
  const handleObjectMatch = (opt, val) => {
    return field ? opt[field] === val[field] : opt === val;
  };

  return (
    <div className={className} style={{ width: width }}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => (field ? option[field] : option)}
        getOptionSelected={handleObjectMatch}
        autoHighlight
        autoComplete
        autoSelect
        value={defValue}
        classes={{ inputRoot: classes.inputContainer }}
        ListboxProps={{
          style: {
            maxHeight: 200,
            overflow: 'auto',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          },
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
            label={label}
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
  // value: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  sortingKey: PropTypes.string, // sortingKey: field for sorting,
  field: PropTypes.string, // field: field for display
  width: PropTypes.number,
  disabled: PropTypes.bool,
  classes: PropTypes.object,
};

OmSingleSelect.defaultProps = {
  value: null,
  options: [],
  width: '100%',
};

export default withStyles(OmBaseStyle, OmSelectStyle)(memo(OmSingleSelect));
