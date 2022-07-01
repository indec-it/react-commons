import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, Tooltip} from '@chakra-ui/react';

import {getError} from '@/utils';
import {useError} from '@/hooks';
import {FormControl} from '@/components';

const _Checkbox = ({
    name,
    label,
    value,
    variant,
    isRequired,
    isDisabled,
    hasError,
    onChange,
    field,
    form,
    containerStyle,
    width,
    ...props
}) => {
    const [handleChange, error] = useError(hasError);

    return (
        <Tooltip hasArrow label={error} bg="brand.danger">
            <FormControl
                name={field?.name || name}
                data-testid={`form-control-${field?.name || name}`}
                error={error || getError(form, field)}
                isRequired={isRequired}
                isReadOnly={isDisabled}
                style={containerStyle}
                width={width}
            >
                <Checkbox
                    {...field}
                    id={name}
                    data-testid={`checkbox-${field?.name || name}`}
                    variant={variant}
                    isChecked={field?.value || value}
                    onChange={e => handleChange(e, field?.onChange || onChange)}
                    isDisabled={isDisabled}
                    h="100%"
                    {...props}
                >
                    {label}
                </Checkbox>
            </FormControl>
        </Tooltip>
    );
};

_Checkbox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string,
    width: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    value: PropTypes.bool,
    hasError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.array]),
    onChange: PropTypes.func,
    form: PropTypes.shape({}),
    containerStyle: PropTypes.shape({}),
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.bool,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    })
};

_Checkbox.defaultProps = {
    containerStyle: {},
    name: undefined,
    width: undefined,
    label: undefined,
    variant: undefined,
    isDisabled: false,
    isRequired: undefined,
    onChange: undefined,
    value: false,
    hasError: undefined,
    form: undefined,
    field: {}
};

export default _Checkbox;
