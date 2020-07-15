import React from "react";
import PropTypes from 'prop-types';
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function OmCheckbox(props) {
    const { className, checked, handleChange, color, size, ...others } = props
    return (
        <div className={className}>
            <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize={size} />}
                checkedIcon={<CheckBoxIcon fontSize={size} />}
                checked={checked}
                onChange={handleChange}
                color={color}
                {...others}
            />
        </div>
    );
}

OmCheckbox.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.string,
    diabled: PropTypes.bool
};

OmCheckbox.defaultProps = {
    color: 'primary', // primary | secondary | default
    size: 'default' // small | medium(default) | large
};

export default React.memo(OmCheckbox);