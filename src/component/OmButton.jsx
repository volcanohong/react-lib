import React from 'react';
import { Button } from '@material-ui/core';

export default function OmButton(props) {
  var variant = props.variant ? props.variant : "outlined";
  var color = props.color ? props.color : "primary"
  return (
    <div className="">
      <Button variant={variant} color={color} {...props}>{props.name}</Button>
    </div>
  );

}