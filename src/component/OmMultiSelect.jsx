import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import OmCheckbox from './OmCheckbox';

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    }
  }
});

function OmMultiSelect(props) {
  const classes = useStyles();
  const checkboxStyle = {
    marginLeft: -10,
    paddingLeft: 0,
    color: 'grey'
  };
  const listItemStyle = {
    color: 'grey'
  };

  const { className, color, lable, options, width, field, placeholder, limitTags, showTags, onChange, ...others } = props;
  const selectAllLabel = 'Select All';
  const [selectedOptions, setSelectedOptions] = useState(props.value ? props.value : []);
  const allSelected = options.length === selectedOptions?.length;
  const handleSelectAll = isSelected => {
    setSelectedOptions(isSelected ? options : []);
  };

  const handleToggleSelectAll = () => {
    console.log(allSelected);
    handleSelectAll && handleSelectAll(!allSelected);
  };

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

  const handleChange = (event, selectedOptions, reason) => {
    if (reason === "select-option" || reason === "remove-option") {
      if (selectedOptions.find(opt => getOptLabel(opt) === selectAllLabel)) {
        console.log('1 sel all');
        handleToggleSelectAll();
        let result = options.filter(opt => getOptLabel(opt) !== selectAllLabel);
        // return onChange(result);
        // return result;
      } else {
        console.log('2 sel partial');
        setSelectedOptions(selectedOptions);
        // return onChange(selectedOptions);
        // return selectedOptions;
      }
    } else if (reason === "clear") {
      setSelectedOptions([]);
    }
  };

  const handleRenderOption = (opt, { selected }) => {
    const selectAllProps = getOptLabel(opt) === selectAllLabel ? { checked: allSelected } : {};
    return (
      <React.Fragment>
        <OmCheckbox
          color={color}
          // icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          // checkedIcon={<CheckBoxIcon fontSize="small" />}
          checked={selected}
          {...selectAllProps}
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

  const filter = createFilterOptions();
  const handleFilterOptions = (opts, params) => {
    const filtered = filter(opts, params);
    const selectAll = field ? { [field]: selectAllLabel } : selectAllLabel
    return [selectAll, ...filtered];
  }

  return (
    <div className={className}>
      <Autocomplete
        multiple
        disableCloseOnSelect
        limitTags={limitTags}
        onChange={handleChange}
        options={options}
        // value={value}
        value={selectedOptions}
        getOptionLabel={opt => getOptLabel(opt)}
        // getOptionSelected={handleObjectMatch}
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
        filterOptions={handleFilterOptions}
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
  // value: PropTypes.array,
  field: PropTypes.string,
  width: PropTypes.number,
  limitTags: PropTypes.number,
  showTags: PropTypes.bool,
  diabled: PropTypes.bool,
  onChange: PropTypes.func
};

OmMultiSelect.defaultProps = {
  options: [],
  // value: [],
  color: 'primary',
  width: 300,
  limitTags: 1,
  showTags: true,
  // onChange: () => { }
};

export default React.memo(OmMultiSelect);