const flex = {
    baseStyle: {
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'space-between'
    },
    variants: {
        mobileCenter: {
            width: '100%',
            padding: '10px 20px',
            '@media(max-width: 872px)': {
                justifyContent: 'center'
            }
        }
    }
};

export default flex;
