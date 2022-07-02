import React from 'react';
import PropTypes from 'prop-types';
import {Textarea as ChakraTextarea} from '@chakra-ui/react';

import {errorPropTypes} from '@/utils/propTypes';
import {getError} from '@/utils';
import {useError} from '@/hooks';
import {FormControl} from '@/components';

const Textarea = ({
    name,
    isDisabled,
    isRequired,
    variant,
    quote,
    containerStyle,
    hasError,
    onChange,
    iconLeft,
    iconRight,
    label,
    form,
    field,
    iconStyles,
    value,
    rows,
    message,
    messageColor,
    width,
    ...props
}) => {
    const [handleChange, error] = useError(hasError);

    return (
        <FormControl
            data-testid={`form-control-${field?.name || name}`}
            name={field?.name || name}
            error={error || getError(form, field)}
            style={containerStyle}
            {...{
                message, messageColor, width, quote, isDisabled, isRequired, iconStyles, label, iconRight, iconLeft
            }}
        >
            <ChakraTextarea
                {...field}
                data-testid={`textarea-${name}`}
                rows={rows}
                height="auto"
                id={field?.name || name}
                value={field?.value || value}
                onChange={e => handleChange(e, onChange || field?.onChange)}
                disabled={isDisabled}
                variant={variant}
                style={error && {borderColor: 'brand.danger'}}
                {...props}
            />
        </FormControl>
    );
};

Textarea.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    quote: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    containerStyle: PropTypes.shape({}),
    iconStyles: PropTypes.shape({}),
    hasError: errorPropTypes,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    label: PropTypes.string,
    width: PropTypes.string,
    form: PropTypes.shape({}),
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }),
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.string,
    message: PropTypes.string,
    messageColor: PropTypes.string
};

Textarea.defaultProps = {
    rows: 3,
    width: undefined,
    message: undefined,
    messageColor: undefined,
    name: undefined,
    placeholder: 'Ingrese',
    containerStyle: {},
    iconStyles: {},
    onChange: undefined,
    variant: 'outline',
    isDisabled: false,
    isRequired: undefined,
    quote: undefined,
    hasError: undefined,
    iconLeft: undefined,
    iconRight: undefined,
    label: undefined,
    form: undefined,
    field: undefined,
    value: ''
};

export default Textarea;
