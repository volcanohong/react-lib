import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export default function OmButton(props) {
  const classes = useStyles();
  const variant = props.variant ? props.variant : "outlined";
  const color = props.color ? props.color : "primary"

  const isIcon = props.icon;
  if (isIcon) {
    return (
      <div className={props.className}>
        <IconButton classes={{ root: classes.root }} color={color} {...props}>
          <i className="material-icons">{props.name}</i>
        </IconButton>
      </div>
    );
  }

  return (
    <div className={props.className}>
      <Button classes={{ root: classes.root }}
        variant={variant} color={color} {...props}>{props.name}</Button>
    </div>
  );
}