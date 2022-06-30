import colors from '../base/colors';

export default {
    variants: {
        reg: {
            field: {
                border: '1px solid',
                borderColor: 'brand.neutral300',
                borderRadius: '5px',
                paddingTop: '2px',
                bg: 'inherit',
                _focus: {
                    border: '1px solid',
                    borderColor: 'brand.neutral200'
                },
                _hover: {
                    borderColor: 'brand.neutral200'
                },
                _active: {
                    border: '1px solid',
                    borderColor: 'brand.neutral200'
                },
                _invalid: {
                    borderColor: 'brand.danger',
                    boxShadow: `0 0 0 1px ${colors.danger}`
                },
                _readOnly: {
                    boxShadow: 'none !important',
                    userSelect: 'all'
                },
                _disabled: {
                    opacity: 0.4,
                    cursor: 'not-allowed'
                }
            }
        }
    }
};
