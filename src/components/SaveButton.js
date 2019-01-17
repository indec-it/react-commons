import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import {noop} from 'lodash';

import LoadingButton from './LoadingButton';

const SaveButton = ({disabled, onClick, saving}) => (
    saving ? <LoadingButton/> : (
        <Button
            type="submit"
            bsStyle="primary"
            className="ta-save"
            {...{disabled, onClick}}
        >
            <FontAwesomeIcon icon={faSave}/>
            &nbsp;Guardar
        </Button>
    )
);

SaveButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    saving: PropTypes.bool
};

SaveButton.defaultProps = {
    disabled: false,
    onClick: noop,
    saving: false
};

export default SaveButton;
