import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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

function OmSingleSelect(props) {
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

  return (
    <div className={props.className}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => field ? option[field] : option}
        getOptionSelected={handleObjectMatch}
        style={{ width: minWidth }}
        autoHighlight
        autoComplete
        autoSelect
        // multiple
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

export default React.memo(OmSingleSelect);