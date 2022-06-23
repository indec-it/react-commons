const getThemeColor = (colors, color) => {
    if (!color) {
        return undefined;
    }
    if (color === 'transparent') {
        return 'transparent';
    }
    const customColor = colors[color];
    if (customColor) {
        return customColor;
    }
    const splittedColor = color.split('.');
    const paletteColor = colors[splittedColor[0]];
    if (typeof paletteColor === 'string') {
        return paletteColor;
    }
    if (typeof paletteColor === 'object' && paletteColor !== null && splittedColor[1]) {
        return paletteColor[splittedColor[1]];
    }
    return color;
};

export default getThemeColor;
