import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import {noop} from 'lodash';

import ActionIndicator from './ActionIndicator';

const SaveButton = ({disabled, onClick, saving}) => (
    <Fragment>
        <ActionIndicator saving={saving}/>
        <Button
            type="submit"
            bsStyle="primary"
            className="ta-save"
            {...{disabled, onClick}}
        >
            <FontAwesomeIcon icon={faSave}/>
            &nbsp;Guardar
        </Button>
    </Fragment>
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
