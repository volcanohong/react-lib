import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    },
  },
});

function OmSelect(props) {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={props.className}>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">Age</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      {/* <Button classes={{ root: classes.root }}
        variant={variant} color={color} {...props}>{props.name}</Button> */}
    </div>
  );
}

export default React.memo(OmSelect);