const checkbox = {
    baseStyle: {

    },
    variants: {
        reg: {
            control: {
                borderRadius: '5px',
                bg: 'brand.white',
                border: '2px solid',
                borderColor: 'brand.neutral200',
                fontSize: '12px',
                boxShadow: 'none !important',
                _disabled: {
                    border: '2px solid',
                    borderColor: 'brand.neutral300',
                    color: 'brand.neutral200',
                    _checked: {
                        bg: 'brand.neutral200',
                        borderColor: 'brand.neutral200',
                        color: 'brand.white'
                    }
                },
                _checked: {
                    bg: 'brand.success',
                    borderColor: 'brand.success'
                }
            }
        },
        circular: {
            control: {
                borderRadius: 'full',
                bg: 'brand.white'
            }
        }
    },
    sizes: {
        normal: {
            control: {
                w: '1.55em',
                h: '1.55em'
            }
        }
    }
};

export default checkbox;
