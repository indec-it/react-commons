const global = {
    'html, body': {
        height: '100%',
        width: '100%',
        padding: 0,
        margin: 0
    },
    '*, :after, :before': {
        boxSizing: 'border-box'
    },
    input: {
        '&:-webkit-autofill::first-line': {
            fontSize: '16px',
            lineHeight: 'inherit',
            fontFamily: 'Arial, sans-serif'
        },
        '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
            fontFamily: 'Arial, sans-serif',
            fontSize: 'initial',
            transition: 'background 5000s',
            background: 'grey !important'
        },
        WebkitAutofill: {
            fontSize: '16px'
        }
    }
};

export default global;
