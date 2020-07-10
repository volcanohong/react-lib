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
  option: {
    fontSize: 15,
  },
  select: {
    minWidth: 250,
  },
});

function OmSingleSelect(props) {
  const classes = useStyles();
  const [selected, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // console.log(props.options);

  const renderOptions = (props) => {
    return props.options.map((item, i) => {
      return (
        <MenuItem
          key={i}
          value={item.value}>
          {item.name}
        </MenuItem>
      );
    });
  };

  return (
    <div className={props.className}>
      <Autocomplete
        id="om-single-select"
        options={props.options}
        className={classes.select}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <React.Fragment>
            {option.name}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose one"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}

export default React.memo(OmSingleSelect);