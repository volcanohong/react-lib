import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    },
  },
  select: {
    minWidth: 120,
  }
});

function OmSelect(props) {
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
    // <Select
    //   labelId="demo-simple-select-label"
    //   id="demo-simple-select"
    //   value={selected}
    //   onChange={handleChange}
    // >
    //   <MenuItem value={10}>Ten</MenuItem>
    //   <MenuItem value={20}>Twenty</MenuItem>
    //   <MenuItem value={30}>Thirty</MenuItem>
    // </Select>
    <div className={props.className}>
      <Select className={classes.select}
        value={selected}
        onChange={handleChange}
        {...props}
      >
        {renderOptions(props)}
        {/* {props.options.map((item, i) => {
          return (
            <MenuItem
              key={i}
              value={item.value}>
              {item.name}
            </MenuItem>
          );
        })} */}
      </Select>
    </div>
  );
}

export default React.memo(OmSelect);