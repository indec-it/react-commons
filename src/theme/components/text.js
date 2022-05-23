const text = {
    baseStyle: {
        color: 'brand.neutral300',
        p: 1,
        span: {
            m: 1
        }
    },
    variants: {
        header: {
            color: 'brand.primary',
            fontSize: 'sm'
        },
        footer: {
            color: 'brand.neutral100',
            fontSize: 'sm'
        },
        forms: {
            fontSize: '14px',
            borderRadius: '5px',
            backgroundColor: 'brand.neutral100',
            color: 'brand.neutral300',
            height: '35px',
            padding: '8px 20px'
        },
        quote: {
            fontSize: '14px',
            color: 'brand.danger',
            padding: '8px 20px'
        },
        mobile: {
            fontSize: 14,
            '@media(max-width: 872px)': {
                fontSize: 12
            }
        },
        caption: {
            fontSize: '16px',
            color: 'brand.primary'
        }
    }
};

export default text;
