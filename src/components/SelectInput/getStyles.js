import {getThemeSize, getThemeColor, removeKeys} from '@/utils';
import {sizes, fontSizes, multiValueSizes} from '@/constants/styles';

const KEYS = ['> option, > optgroup', '_hover', '_readOnly', '_disabled', '_invalid', '_focusVisible'];

const getStyles = (colors, variant, styles, size = 'md', width, isDisabled, hasError, readyOnly) => {
    const fieldStyles = styles?.field || {};
    const borderColor = fieldStyles.borderColor !== 'inherit' && fieldStyles.borderColor;
    const hoverBorderColor = getThemeColor(colors, fieldStyles._hover?.borderColor || borderColor);
    const disabledBorderColor = getThemeColor(colors, fieldStyles._disabled?.borderColor || borderColor);
    const focusBorderColor = getThemeColor(
        colors, fieldStyles._focus?.borderColor || fieldStyles._focusVisible?.borderColor || borderColor
    );
    const focusBoxShadowColor = getThemeColor(
        colors, fieldStyles._focus?.boxShadow || fieldStyles._focusVisible?.boxShadow
    );
    const invalidBoxShadowColor = getThemeColor(colors, fieldStyles._invalid?.boxShadow);
    const invalidBorderColor = getThemeColor(colors, fieldStyles._invalid?.borderColor || borderColor);

    const newStyles = removeKeys(fieldStyles, KEYS);

    return {
        container: (provider, state) => {
            const focusStyles = state.isFocused ? {
                ...(fieldStyles._focus || {}),
                backgroundColor: getThemeColor(colors, fieldStyles?._focus?.bg) || 'transparent',
                borderColor: hasError ? invalidBorderColor : focusBorderColor
            } : {};
            const hoverStyles = state.isFocused ? {
                ...(fieldStyles._hover || {}),
                borderColor: hasError ? invalidBorderColor : focusBorderColor || hoverBorderColor
            } : {borderColor: hasError ? invalidBorderColor : hoverBorderColor};
            const hoverBackgroundStyles = {
                backgroundColor: (!state.isFocused && getThemeColor(colors, fieldStyles._hover?.bg)) || 'inherit'
            };
            const invalidStyles = hasError ? {borderColor: invalidBorderColor, boxShadow: invalidBoxShadowColor} : {};
            const readOnlyStyles = readyOnly ? fieldStyles._readOnly : {} || {};
            return {
                ...newStyles,
                borderColor: borderColor ? getThemeColor(colors, borderColor) : getThemeColor(colors, 'gray.200'),
                '&:hover': {
                    ...hoverStyles,
                    ...hoverBackgroundStyles
                },
                '&:disabled': {
                    ...(fieldStyles._disabled || {}),
                    borderColor: disabledBorderColor
                },
                boxShadow: state.isFocused ? focusBoxShadowColor : fieldStyles.boxShadow,
                backgroundColor: getThemeColor(colors, fieldStyles.bg),
                paddingInlineEnd: 0,
                borderRadius: getThemeSize(fieldStyles.borderRadius, true),
                ...focusStyles,
                ...invalidStyles,
                ...readOnlyStyles,
                width: '100%',
                transitionProperty: 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
                transitionDuration: '200ms',
                height: 'auto',
                minHeight: sizes[size],
                padding: 0
            };
        },
        control: () => ({
            border: 'none',
            alignItems: 'center',
            borderWidth: 1,
            boxShadow: undefined,
            boxSizing: 'border-box',
            cursor: 'default',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            label: 'control',
            position: 'relative',
            transition: 'all 100ms',
            width: '100%'
        }),
        singleValue: provided => ({
            ...provided,
            alignItems: 'center',
            display: 'flex'
        }),
        input: provided => ({
            ...provided,
            height: 'auto'
        }),
        valueContainer: provided => ({
            ...provided,
            fontSize: fontSizes[size],
            height: 'auto'
        }),
        indicatorsContainer: provided => ({
            ...provided,
            height: sizes[size]
        }),
        indicatorContainer: provided => ({
            ...provided
        }),
        menuList: provided => ({
            ...provided,
            background: 'white'
        }),
        menu: provided => ({
            ...provided,
            zIndex: 9999
        }),
        multiValueRemove: provided => ({
            ...provided,
            height: multiValueSizes[size],
            display: 'flex'
        })
    };
};

export default getStyles;
