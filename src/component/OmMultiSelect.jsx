import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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
  let minWidth = 200;
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
        limitTags={1}
        options={options}
        getOptionLabel={(option) => field ? option[field] : option}
        getOptionSelected={handleObjectMatch}
        style={{ width: minWidth }}
        autoHighlight
        autoComplete
        autoSelect
        // renderOption={(option, state) => {
        //   // const idx = selectedValue.findIndex(
        //   //   opt => opt[field].toLowerCase() === 'All' || opt.toLowerCase === 'All'
        //   // );
        //   // if (idx > -1) {
        //   //   state.selected = true;
        //   // }
        //   return (
        //     <React.Fragment>
        //       <Checkbox
        //         // icon={icon}
        //         // checkedIcon={checkedIcon}
        //         style={{ marginRight: 8 }}
        //         checked={state.selected}
        //       />
        //       {field ? option[field] : option}
        //     </React.Fragment>
        //   );
        // }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={lable}
            placeholder={placeholder}
          />
        )}
        {...others}
      />
    </div>
  );
}

export default React.memo(OmMultiSelect);