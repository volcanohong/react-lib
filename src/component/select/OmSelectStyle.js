const OmSelectStyle = (theme) => ({
    inputContainer: {
        '&::before': {
            borderBottomWidth: 2,
            borderBottomColor: theme.palette.secondary.main,
        },
    },
    popper: {
        width: 'auto !important',
    },
});

export default OmSelectStyle;
