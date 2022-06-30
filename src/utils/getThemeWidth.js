const getThemeWidth = width => {
    switch (width) {
        case 'xs': {
            return '5em';
        }
        case 'sm': {
            return '10em';
        }
        case 'md': {
            return '15em';
        }
        case 'lg': {
            return '20em';
        }
        case 'xl': {
            return '25em';
        }
        default: {
            return width || 'initial';
        }
    }
};

export default getThemeWidth;
