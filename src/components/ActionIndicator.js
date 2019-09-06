import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'reactstrap';

import LoadingIndicator from './LoadingIndicator';
import SaveIndicator from './SaveIndicator';

const ActionIndicator = ({
    saving, savingLabel, loading, loadingLabel
}) => (
    <Modal isOpen={saving || loading} className="action-indicator">
        {loading && loadingLabel}
        {saving && savingLabel}
    </Modal>
);

ActionIndicator.propTypes = {
    saving: PropTypes.bool,
    loading: PropTypes.bool,
    loadingLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(React)
    ]),
    savingLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(React)
    ])
};

ActionIndicator.defaultProps = {
    saving: false,
    loading: false,
    loadingLabel: <LoadingIndicator/>,
    savingLabel: <SaveIndicator/>
};

export default ActionIndicator;
