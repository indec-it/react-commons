import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {size} from 'lodash';

import TextField from './TextField';

const TextareaField = ({
    maxLength, onChange, control, value, ...props
}) => (
    <Fragment>
        <TextField type="textarea" onChange={onChange} control={control} {...props}/>
        <small>
            {`Quedan ${maxLength - size(value)} caracter(es) disponibles.`}
        </small>
    </Fragment>
);

TextareaField.propTypes = {
    onChange: PropTypes.func.isRequired,
    control: PropTypes.string.isRequired,
    label: PropTypes.string,
    feedBackLabel: PropTypes.string,
    value: PropTypes.string.isRequired,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    disabled: PropTypes.bool,
    feedBack: PropTypes.bool
};

TextareaField.defaultProps = {
    label: null,
    maxLength: 250,
    minLength: 2,
    disabled: false,
    feedBack: false,
    feedBackLabel: 'Valor invalido'
};

export default TextareaField;
