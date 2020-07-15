import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import OmCheckbox from './OmCheckbox';

const useStyles = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    },
  },
  select: {
    fontSize: 15,
    minWidth: 250,
  },
});

function OmMultiSelect(props) {
  const classes = useStyles();
  const { lable, options, width, field, placeholder, ...others } = props;
  // const minWidth = width ? width : 200; // now working
  let minWidth = 300;
  // console.log(value);

  //array of objects can cause unmatch of value and option, which generates lots of warnings
  const handleObjectMatch = (opt, val) => {
    if (field) {
      return opt[field] === val[field];
    }
    return opt === val;
  }


  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [selectedValue] = useState([]);
  return (
    <div className={props.className}>
      <Autocomplete
        multiple
        disableCloseOnSelect
        limitTags={0}
        options={options}
        getOptionLabel={(option) => field ? option[field] : option}
        getOptionSelected={handleObjectMatch}
        style={{ width: minWidth }}
        ListboxProps={{ style: { maxHeight: 250, overflow: 'auto' } }}
        // autoHighlight
        // autoComplete
        // autoSelect
        renderOption={(option, state) => {
          const idx = selectedValue.findIndex(
            opt => opt[field].toLowerCase() === 'All' || opt.toLowerCase === 'All'
          );
          if (idx > -1) {
            state.selected = true;
          }
          return (
            <React.Fragment>
              <OmCheckbox
                style={{ marginLeft: 0, paddingLeft: 0, color: 'grey' }}
                checked={state.selected}
              />
              <span style={{ color: 'grey' }}>{field ? option[field] : option}</span>
            </React.Fragment>
          );
        }}
        renderInput={(params) => (
          <TextField
            style={{ maxHeight: 50 }}
            label={lable}
            placeholder={placeholder}
            {...params}
          />
        )}
        {...others}
      />
    </div>
  );
}

export default React.memo(OmMultiSelect);