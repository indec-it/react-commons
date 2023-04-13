import React from 'react';
import PropTypes from 'prop-types';
import {
    NumberInput as ChakraNumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react';

import {errorPropTypes} from '@/utils/propTypes';
import {getError} from '@/utils';
import {useError} from '@/hooks';
import {FormControl} from '@/components';

const NumberInput = ({
    name,
    placeholder,
    label,
    isDisabled,
    isRequired,
    variant,
    quote,
    containerStyle,
    onChange,
    iconLeft,
    iconRight,
    hasError,
    form,
    field,
    hiddenStepper,
    value,
    width,
    ...props
}) => {
    const [handleChange, error, setField] = useError(hasError);
    const isEmptyStringFieldValue = field?.value === '';

    return (
        <FormControl
            name={field?.name || name}
            data-testid={`form-control-${field?.name || name}`}
            error={error || getError(form, field)}
            style={containerStyle}
            {...{
                width, quote, isDisabled, isRequired, label, iconRight, iconLeft
            }}
        >
            <ChakraNumberInput
                w="100%"
                disabled={isDisabled}
                type={isEmptyStringFieldValue ? 'string' : 'number'}
                variant={variant}
                value={field?.value === 0 ? field.value : field?.value || value}
                onKeyDown={e => e.key === 'e' && e.preventDefault()}
                onChange={newValue => {
                    if (field) {
                        setField(field.name, newValue === '' ? '' : newValue, form.setFieldValue);
                    } else {
                        handleChange(
                            {target: {id: name, value: newValue === '' ? '' : newValue}},
                            onChange
                        );
                    }
                }}
                {...props}
            >
                <NumberInputField data-testid={`input-${field?.name || name}`} placeholder={placeholder}/>
                {!hiddenStepper && (
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
                )}
            </ChakraNumberInput>
        </FormControl>
    );
};

NumberInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    hiddenStepper: PropTypes.bool,
    quote: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    containerStyle: PropTypes.shape({}),
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    onChange: PropTypes.func,
    hasError: errorPropTypes,
    label: PropTypes.string,
    width: PropTypes.string,
    form: PropTypes.shape({
        setFieldValue: PropTypes.func
    }),
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

NumberInput.defaultProps = {
    name: undefined,
    width: undefined,
    containerStyle: {},
    placeholder: 'Ingrese',
    variant: 'outline',
    isDisabled: false,
    hiddenStepper: false,
    isRequired: undefined,
    hasError: undefined,
    quote: undefined,
    onChange: undefined,
    iconLeft: undefined,
    iconRight: undefined,
    label: undefined,
    form: undefined,
    field: undefined,
    value: ''
};

export default NumberInput;
