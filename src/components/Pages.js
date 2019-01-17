import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row, Pagination} from 'react-bootstrap';
import {ceil, min, range} from 'lodash';

const getPages = (pageSize, resultsCount, maxPage) => range(min([ceil(resultsCount / pageSize), maxPage]));

const Pages = ({
    pageSize, resultsCount, selectedPage, maxPage, onChange
}) => (
    <Row>
        <Col sm={12} className="text-center">
            <Pagination bsSize="medium">
                {getPages(pageSize, resultsCount, maxPage).map(page => (
                    <Pagination.Item key={page} active={page === selectedPage} onClick={() => onChange(page)}>
                        {page + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </Col>
    </Row>
);

Pages.propTypes = {
    onChange: PropTypes.func.isRequired,
    resultsCount: PropTypes.number,
    pageSize: PropTypes.number,
    selectedPage: PropTypes.number.isRequired,
    maxPage: PropTypes.number
};

Pages.defaultProps = {
    maxPage: 30,
    pageSize: 0,
    resultsCount: 0
};

export default Pages;
