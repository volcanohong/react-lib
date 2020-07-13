import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton, Fab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "&:focus": {
      outline: "none",
    },
  }
});

function OmButton(props) {
  const classes = useStyles();
  const variant = props.variant ? props.variant : "outlined"; // outlined | contained | text
  const color = props.color ? props.color : "primary"; // primary | secondary | default
  const styleBorderRadius = props.square ? 0 : 8; // square | rounded
  const isIcon = props.icon;
  const isFab = props.fab;

  if (isIcon) {
    return (
      <div className={props.className}>
        <IconButton
          classes={{ root: classes.root }}
          color={color}
          {...props}
        >
          <i className="material-icons">{props.name}</i>
        </IconButton>
      </div>
    );
  }

  if (isFab) {
    return (
      <div className={props.className}>
        <Fab
          classes={{ root: classes.root }}
          color={color}
          {...props}>
          <i className="material-icons">{props.name}</i>
        </Fab>
      </div>
    );
  }

  return (
    <div className={props.className}>
      <Button
        classes={{ root: classes.root }}
        style={{ borderRadius: styleBorderRadius }}
        variant={variant}
        color={color}
        {...props}
      >
        {props.name}
      </Button>
    </div>
  );
}

export default React.memo(OmButton);
