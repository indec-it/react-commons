import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FaSearch} from 'react-icons/fa';
import {
    Button,
    ButtonGroup,
    NumberInput,
    NumberInputField,
    VStack,
    Text,
    IconButton,
    FormControl,
    HStack
} from '@chakra-ui/react';
import {getPagesRange, getPagesNumber} from '@/utils';

const Pagination = ({
    total,
    show,
    perPage,
    currentPage,
    onChange,
    styles
}) => {
    const totalPages = (total && perPage) ? Math.ceil(total / perPage) : 1;
    const [pages, setPages] = useState([]);
    const [search, setSearch] = useState(currentPage);
    const hasArrowRight = Math.max(...pages) < totalPages;
    const hasArrowLeft = Math.min(...pages) > 1;

    const handleChangeInput = value => setSearch(Number(value) || "");

    const handleMoveLeft = () => {
        const pagesNumbers = getPagesNumber(pages);
        setPages(getPagesRange(Math.max(...[Math.min(...pagesNumbers) - 1, 1]), null, totalPages));
    };

    const handleMoveRight = () => {
        const pagesNumbers = getPagesNumber(pages);
        setPages(getPagesRange(Math.min(...[Math.max(...pagesNumbers) + 2, totalPages]), null, totalPages));
    };

    const handleSearch = () => {
        if (!Number.isNaN(search)) {
            let over = search - 1;
            if (search > totalPages) {
                over = totalPages;
            }
            if (search < 0) {
                over = 0;
            }
            onChange({target: {id: 'skip', value: over}});
        }
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            handleSearch();
        }
    };

    const handleBlur = () => !Number.isNaN(search) && setSearch(1);

    useEffect(() => {
        setPages(getPagesRange(null, currentPage, totalPages) || []);
    }, [totalPages]);

    useEffect(() => {
        setPages(getPagesRange(null, currentPage, totalPages));
    }, [currentPage]);

    return (
        totalPages > 1 && (
            <VStack data-testid="pagination" hidden={!show} w="min-content">
                <ButtonGroup>
                    {hasArrowLeft && (
                        <Button
                            data-testid="back-button"
                            onClick={handleMoveLeft}
                            bg="brand.neutral50"
                            boxShadow="none !important"
                            {...styles.leftButton}
                        >
                            <span>&laquo;</span>
                        </Button>
                    )}
                    {pages.map(page => (
                        <Button
                            key={page}
                            bg={currentPage === page ? 'brand.primary' : 'brand.neutral100'}
                            data-testid={`page-${page}`}
                            onClick={() => onChange({target: {id: 'skip', value: page - 1}})}
                            color="white"
                            boxShadow="none !important"
                            _hover={{opacity: 1}}
                            _active={{opacity: 0.85}}
                            {...styles.pagesButtons}
                        >
                            {page}
                        </Button>
                    ))}
                    {hasArrowRight && (
                        <Button
                            data-testid="next-button"
                            onClick={handleMoveRight}
                            bg="brand.neutral50"
                            boxShadow="none !important"
                            {...styles.rightButtons}
                        >
                            <span>&raquo;</span>
                        </Button>
                    )}
                </ButtonGroup>
                {totalPages > 2 && (
                    <HStack alignItems="baseline">
                        <FormControl placeSelf="center">
                            <NumberInput
                                min={1}
                                max={totalPages}
                                onChange={handleChangeInput}
                                defaultValue={1}
                                value={!Number.isNaN(search) ? search : undefined}
                                onKeyDown={handleKeyDown}
                                onBlur={handleBlur}
                            >
                                <NumberInputField p="0 10px" data-testid="input"/>
                            </NumberInput>
                        </FormControl>
                        <Text>&#10072;</Text>
                        <Text ml="5px" data-testid="total-pages">{totalPages}</Text>
                        <IconButton
                            data-testid="pagination-search-button"
                            color="brand.primary"
                            onClick={handleSearch}
                            icon={<FaSearch/>}
                            aria-label="search"
                            ml={2}
                            boxShadow="none"
                        />
                    </HStack>
                )}
            </VStack>
        )
    );
};

Pagination.propTypes = {
    onChange: PropTypes.func.isRequired,
    total: PropTypes.number,
    show: PropTypes.bool,
    perPage: PropTypes.number,
    currentPage: PropTypes.number,
    styles: PropTypes.shape({
        leftButton: PropTypes.shape({}),
        pagesButtons: PropTypes.shape({}),
        rightButtons: PropTypes.shape({})
    })
};

Pagination.defaultProps = {
    total: 1,
    perPage: 5,
    show: true,
    currentPage: 1,
    styles: {
        leftButton: {},
        pagesButtons: {},
        rightButtons: {}
    }
};

export default Pagination;
