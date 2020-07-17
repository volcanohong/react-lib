import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';
import {
    MuiPickersUtilsProvider,
    TimePicker,
    DatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    inputContainer: {
        width: 80
    },
    iconButton: {
        width: 36,
        height: 36,
        padding: 0,
        minWidth: 36,
        marginRight: 8
    },
    icon: {
        fontSize: '2.375em'
    }
});

function OmDatePicker(props) {

    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(!!props.date ? props.date : null);
    const [showDialog, setShowDialog] = useState(false);

    const handleDateChange = date => {
        setSelectedDate(date);
        props.onDateChange(date);
    };

    const toggleDialog = state => {
        if (!props.readOnly) {
            setShowDialog(state);
        }
    }

    return (
        <div className={props.className}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container>
                    {
                        props.variant === 'date' ?
                            <Grid item className='om-flex om-flex-row om-items-center'>
                                {
                                    !!props.prefixicon ?
                                        <Button variant="contained" color="primary"
                                            onClick={() => toggleDialog(true)}
                                            classes={{ root: classes.iconButton }}>
                                            <Icon classes={{ root: classes.icon }}>today</Icon>
                                        </Button> : null
                                }
                                <DatePicker
                                    margin="normal"
                                    id={props.id}
                                    format={props.dateformat}
                                    value={selectedDate}
                                    onChange={(date) => handleDateChange(date)}
                                    open={showDialog}
                                    disabled={props.readOnly}
                                    onAccept={() => toggleDialog(false)}
                                    onClose={() => toggleDialog(false)}
                                    placeholder={props.placeholder}
                                    InputProps={{
                                        className: classes.inputContainer,
                                        onClick: () => toggleDialog(true)
                                    }}
                                />
                            </Grid>
                            : null
                    }
                    {
                        props.variant === 'time' ?
                            <Grid item className='om-flex om-flex-row om-items-center'>
                                {
                                    !!props.prefixicon ?
                                        <Button variant="contained" color="primary"
                                            onClick={() => toggleDialog(true)}
                                            classes={{ root: classes.iconButton }}>
                                            <Icon classes={{ root: classes.icon }}>schedule</Icon>
                                        </Button> : null
                                }
                                <TimePicker
                                    margin="normal"
                                    id={props.id}
                                    value={selectedDate}
                                    format={props.timeformat}
                                    onChange={(date) => handleDateChange(date)}
                                    open={showDialog}
                                    disabled={props.readOnly}
                                    onAccept={() => toggleDialog(false)}
                                    onClose={() => toggleDialog(false)}
                                    placeholder={props.placeholder}
                                    InputProps={{
                                        className: classes.inputContainer,
                                        onClick: () => toggleDialog(true)
                                    }}
                                />
                            </Grid>
                            : null
                    }

                </Grid>
            </MuiPickersUtilsProvider>
        </div>

    );
}

OmDatePicker.propTypes = {
    id: PropTypes.string,
    date: PropTypes.object,
    variant: PropTypes.string,
    prefixicon: PropTypes.bool,
    placeholder: PropTypes.string,
    dateformat: PropTypes.string,
    timeformat: PropTypes.string,
    className: PropTypes.string,
    onDateChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool
}

OmDatePicker.defaultProps = {
    variant: 'date',
    prefixicon: true,
    dateformat: 'dd-MM-yyyy',
    timeformat: 'HH:mm',
    readOnly: false
}

export default OmDatePicker;
