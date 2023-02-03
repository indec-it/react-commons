import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useStyleConfig, useTheme} from '@chakra-ui/react';
import Select from 'react-select';

import FormControl from '@/components/FormControl';
import {getError, getSelectedOptions, getValue} from '@/utils';
import {errorPropTypes, optionPropTypes} from '@/utils/propTypes';
import {useError} from '@/hooks';
import {selectActions} from '@/constants';
import getStyles from '@/components/SelectInput/getStyles';
import MenuListFooter from '@/components/SelectInput/MenuListFooter';
import MenuList from '@/components/SelectInput/MenuList';

const SelectInput = ({
    options,
    label,
    name,
    onChange,
    value,
    placeholder,
    getOptionValue,
    getOptionLabel,
    isRequired,
    isReadyOnly,
    saveName,
    onBlur,
    isDisabled,
    quote,
    loadOptions,
    isLoading,
    onInputChange,
    total,
    hasError,
    isClearable,
    isSearchable,
    variant,
    field,
    form,
    containerStyle,
    size,
    width,
    ...props
}) => {
    const selectedValue = form ? field.value : getValue(value);
    const selectedOptions = getSelectedOptions(options, selectedValue, getOptionValue);
    const styles = useStyleConfig('Select', {variant});
    const [skip, setSkip] = useState(0);
    const hasMore = options.length > 0 && total && total > 1 && options.length < total && !isLoading;
    const [handleChange, error] = useError(hasError);
    const {colors} = useTheme();
    const chakraStyles = colors ? getStyles(
        colors,
        variant,
        styles,
        size,
        isDisabled,
        error || getError(form, field),
        isReadyOnly
    ) : undefined;

    const handleChangeInput = newValue => {
        if (form) {
            if (saveName) {
                form.setFieldValue(`${field.name}Name`, newValue.label);
            }
            if (Array.isArray(newValue) ? newValue?.length : newValue) {
                form.setFieldTouched(field.name);
            }
        }
        const valueOptions = Array.isArray(newValue)
            ? newValue.map(option => getOptionValue(option))
            : getOptionValue(newValue);
        if (loadOptions && newValue === null && options.length === 1) {
            loadOptions(0, true);
        }
        return onChange
            ? onChange({target: {id: field?.name || name, value: valueOptions}})
            : form?.setFieldValue(field.name, valueOptions);
    };

    const handleClick = () => {
        setSkip(skip + 1);
        loadOptions?.(skip + 1);
    };

    const handleInputChange = (term, action) => {
        const restoreOptions = action.prevInputValue && action.action === selectActions.INPUT_BLUR;
        if (action.action === selectActions.SET_VALUE || action.action === selectActions.MENU_CLOSE) {
            return;
        }
        if (action.action === selectActions.INPUT_BLUR && restoreOptions) {
            setSkip(0);
            loadOptions?.(0, true);
            return;
        }
        if (action.action === selectActions.INPUT_CHANGE && onInputChange) {
            setSkip(0);
            onInputChange(term);
        }
    };

    return (
        <FormControl
            name={field?.name || name}
            mb={5}
            data-testid={`form-control-${field?.name || name}`}
            isDisabled={isDisabled}
            error={error || getError(form, field)}
            isReadOnly={isDisabled}
            style={containerStyle}
            {...{
                width, quote, isDisabled, isRequired, label
            }}
        >
            <Select
                inputId={field?.name || name}
                options={options}
                placeholder={placeholder}
                variant={variant}
                components={{
                    MenuListFooter: <MenuListFooter onClick={handleClick} isLoading={isLoading}/>,
                    MenuList: propsSelect => <MenuList {...propsSelect} hasMore={hasMore}/>
                }}
                isLoading={isLoading}
                onChange={e => handleChange(e, handleChangeInput)}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                value={selectedOptions}
                onBlur={() => onBlur({target: {id: field?.name || name, value: selectedValue}})}
                isClearable={isClearable}
                isSearchable={isSearchable}
                onInputChange={handleInputChange}
                isDisabled={isDisabled}
                loadingMessage={() => 'Cargando..'}
                noOptionsMessage={() => 'No hay resultados.'}
                styles={chakraStyles}
                focusBorderColor="brand.neutral100"
                size={size}
                {...props}
            />
        </FormControl>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(optionPropTypes),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    size: PropTypes.string,
    isRequired: PropTypes.bool,
    isLoading: PropTypes.bool,
    isClearable: PropTypes.bool,
    isReadyOnly: PropTypes.bool,
    isSearchable: PropTypes.bool,
    saveName: PropTypes.bool,
    getOptionLabel: PropTypes.func,
    getOptionValue: PropTypes.func,
    onInputChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.shape({})
        ]))
    ]),
    quote: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    total: PropTypes.number,
    loadOptions: PropTypes.func,
    hasError: errorPropTypes,
    containerStyle: PropTypes.shape({}),
    variant: PropTypes.string,
    width: PropTypes.string,
    form: PropTypes.shape({
        handleChange: PropTypes.func,
        setFieldValue: PropTypes.func,
        setFieldTouched: PropTypes.func,
        values: PropTypes.shape({})
    }),
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.shape({})
            ]))
        ]),
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    })
};

SelectInput.defaultProps = {
    options: [],
    containerStyle: {},
    name: undefined,
    width: undefined,
    size: undefined,
    placeholder: 'Seleccione',
    total: undefined,
    isLoading: false,
    value: null,
    loadOptions: undefined,
    onInputChange: undefined,
    onBlur: () => {},
    onChange: undefined,
    variant: 'outline',
    label: undefined,
    isDisabled: false,
    isReadyOnly: false,
    isClearable: true,
    isSearchable: true,
    hasError: undefined,
    saveName: undefined,
    isRequired: undefined,
    getOptionLabel: option => option?.label,
    getOptionValue: option => option?.value,
    quote: undefined,
    form: undefined,
    field: undefined
};

export default SelectInput;
