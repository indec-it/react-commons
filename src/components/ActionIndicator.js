import React, {Fragment} from 'react';
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
        <Fragment>
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
        </Fragment>
    )
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
    loadingLabel: LoadingIndicator,
    savingLabel: SaveIndicator
};

export default ActionIndicator;
