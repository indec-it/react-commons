const wrapperSelect = {
    padding: '10px 20px',
    maxWidth: 380,
    width: '100%',
    minWidth: 280,
    margin: '0 !important'
};

const wrapper = {
    padding: '10px 20px',
    maxWidth: 380,
    width: '100%',
    minWidth: 280,
    overflowX: 'hidden',
    margin: '0 !important'
};

const box = {
    variants: {
        wrappers: wrapper,
        wrappersSelect: wrapperSelect,
        wrappersWithoutPadding: {
            ...wrapperSelect,
            padding: 0
        },
        wrappersSelectWithoutPadding: {
            ...wrapperSelect,
            padding: 0
        }
    }
};

export default box;
