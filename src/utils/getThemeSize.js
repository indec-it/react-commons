import {useTheme} from '@chakra-ui/react';

const getSizeSelect = size => {
    switch (size) {
        case 'sm': {
            return 3;
        }
        case 'md': {
            return 6;
        }
        case 'lg': {
            return 9;
        }
        case 'xl': {
            return 12;
        }
        default: {
            return 0;
        }
    }
};

const getThemeSize = (size, isSelectSizes) => {
    if (!size) {
        return 0;
    }
    if (size) {
        const sizePixel = size.split('px');
        if (!Number.isNaN(parseInt(sizePixel, 10))) {
            return `${sizePixel[0]}px`;
        }
    }
    const {sizes} = useTheme();
    if (isSelectSizes) {
        return getSizeSelect(size);
    }
    const selectedSize = sizes.container[size];
    return selectedSize || size;
};

export default getThemeSize;
