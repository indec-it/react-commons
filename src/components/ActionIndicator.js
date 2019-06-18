import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from './LoadingIndicator';
import SaveIndicator from './SaveIndicator';

const ActionIndicator = ({
    saving,
    savingLabel,
    loading,
    loadingLabel
}) => (
    (saving || loading) && (
        <div>
            <div
                className="modal fade show"
                style={{
                    display: 'block',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div
                    className="align-middle text-center h-100"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex'
                    }}
                >
                    {loading && loadingLabel}
                    {saving && savingLabel}
                </div>
            </div>
            <div className="modal-backdrop fade show"/>
        </div>
    )
);

ActionIndicator.propTypes = {
    saving: PropTypes.bool,
    loading: PropTypes.bool,
    loadingLabel: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.instanceOf(React)
    ]),
    savingLabel: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.instanceOf(React)
    ])
};

ActionIndicator.defaultProps = {
    saving: false,
    loading: false,
    loadingLabel: LoadingIndicator,
    savingLabel: SaveIndicator
};

export default ActionIndicator;
