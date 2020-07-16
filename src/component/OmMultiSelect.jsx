import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import OmCheckbox from './OmCheckbox';

const useStyles = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    }
  }
});

function OmMultiSelect(props) {
  const classes = useStyles();
  const { className, color, lable, options, width, field, placeholder, limitTags, showTags, ...others } = props;

  const getOptLabel = (opt) => {
    return opt[field] || opt;
  };
  //array of objects can cause unmatch of value and option, which generates lots of warnings
  const handleObjectMatch = (opt, val) => {
    if (field) {
      return opt[field] === val[field];
    }
    return opt === val;
  };

  const checkboxStyle = {
    marginLeft: -10,
    paddingLeft: 0,
    color: 'grey'
  };
  const listItemStyle = {
    color: 'grey'
  };

  const handleRenderTags = showTags ? (values, getTagProps) => {
    return values.map((opt, idx) => (
      <Chip {...getTagProps({ idx })} key={idx} label={getOptLabel(opt)} />
    ));
  } : (values, getTagProps) => {
    if (values.length <= limitTags) {
      let tags = values.map((opt, idx) => (
        getOptLabel(opt)
      ));
      return intersep(tags, ", ");
    }
    return values.length + ' Selected';
  };

  const handleRenderOption = (opt, state) => {
    return (
      <React.Fragment>
        <OmCheckbox
          color={color}
          checked={state.selected}
        />
        <span style={listItemStyle}>{getOptLabel(opt)}</span>
      </React.Fragment>
    );
  };

  const handleRenderInput = (params) => (
    <TextField
      label={lable}
      placeholder={placeholder}
      {...params}
      fullWidth
    />
  );

  return (
    <div className={className}>
      <Autocomplete
        multiple
        disableCloseOnSelect
        limitTags={limitTags}
        options={options}
        getOptionLabel={opt => getOptLabel(opt)}
        getOptionSelected={handleObjectMatch}
        style={{ width: width }}
        ListboxProps={{
          style: {
            maxHeight: 200,
            overflow: 'auto',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
          }
        }}
        renderTags={handleRenderTags}
        renderOption={handleRenderOption}
        renderInput={handleRenderInput}
        {...others}
      />
    </div>
  );
}

function intersep(arr, sep) {
  if (arr.length === 0) {
    return [];
  }
  return arr.slice(1).reduce(function (str, x, i) {
    return str.concat([sep, x]);
  }, [arr[0]]);
}

OmMultiSelect.propTypes = {
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  options: PropTypes.array,
  field: PropTypes.string,
  width: PropTypes.number,
  limitTags: PropTypes.number,
  showTags: PropTypes.bool,
  diabled: PropTypes.bool
};

OmMultiSelect.defaultProps = {
  options: [],
  color: 'primary',
  width: 300,
  limitTags: 1,
  showTags: true
};

export default React.memo(OmMultiSelect);