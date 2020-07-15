import React from "react";
import PropTypes from 'prop-types';
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
  const { className, name, color, variant, size, icon, fab, square, ...others } = props;
  const styleBorderRadius = square ? 0 : 8; // square | rounded
  if (icon) {
    return (
      <div className={className}>
        <IconButton
          classes={{ root: classes.root }}
          color={color}
          {...others}
        >
          <i className="material-icons">{name}</i>
        </IconButton>
      </div>
    );
  }

  if (fab) {
    return (
      <div className={className}>
        <Fab
          classes={{ root: classes.root }}
          color={color}
          {...others}>
          <i className="material-icons">{name}</i>
        </Fab>
      </div>
    );
  }

  return (
    <div className={className}>
      <Button
        classes={{ root: classes.root }}
        style={{ borderRadius: styleBorderRadius }}
        variant={variant}
        color={color}
        {...others}
      >
        {name}
      </Button>
    </div>
  );
}

OmButton.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  square: PropTypes.bool,
  diabled: PropTypes.bool,
  icon: PropTypes.bool,
  fab: PropTypes.bool
};

OmButton.defaultProps = {
  variant: 'outlined', // outlined | contained | text
  color: 'primary', // primary | secondary | default
  square: false,
  icon: false,
  fab: false
};

export default React.memo(OmButton);
