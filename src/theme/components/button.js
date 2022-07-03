export default {
    variants: {
        rounded: {
            boxShadow: '2px 3px 4px rgba(0, 0, 0, 0.3)',
            fontWeight: 400,
            background: 'brand.primary',
            borderRadius: '35px',
            fontSize: '16px',
            textAlign: 'center',
            margin: '0 auto',
            color: 'brand.white',
            textTransform: 'uppercase',
            padding: '14px 20px',
            border: 0,
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            _focus: {
                shadow: '2px 3px 4px rgba(0, 0, 0, 0.3)'
            },
            _hover: {
                filter: 'brightness(105%)'
            },
            _active: {
                opacity: 0.8
            }
        }
    }
};
