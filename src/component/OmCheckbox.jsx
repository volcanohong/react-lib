import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function OmCheckbox(props) {
    const { checked, handleChange, size, ...others } = props
    const color = props.color ? props.color : "primary"; // primary | secondary | default

    return (
        <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize={size} />}
            checkedIcon={<CheckBoxIcon fontSize={size} />}
            checked={checked}
            onChange={handleChange}
            color={color}
            {...others}
        />
    );
}

export default React.memo(OmCheckbox);