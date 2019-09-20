import React from 'react';
import PropTypes from 'prop-types';
import {
    Col, Row, Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import {ceil, min, range} from 'lodash';

const getPages = (pageSize, resultsCount, maxPage) => range(min([ceil(resultsCount / pageSize), maxPage]));

const Pages = ({
    pageSize, resultsCount, selectedPage, maxPage, onChange, paginationSize
}) => (
    <Row>
        <Col>
            <Pagination size={paginationSize}>
                {getPages(pageSize, resultsCount, maxPage).map(page => (
                    <PaginationItem key={page} active={page === selectedPage} onClick={() => onChange(page)}>
                        <PaginationLink>{page + 1}</PaginationLink>
                    </PaginationItem>
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
    maxPage: PropTypes.number,
    paginationSize: PropTypes.string
};

Pages.defaultProps = {
    maxPage: 30,
    pageSize: 0,
    resultsCount: 0,
    paginationSize: 'md'
};

export default Pages;
