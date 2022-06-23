import {
    fireEvent,
    getByTestId,
    getByText,
    queryByTestId
} from '@testing-library/react';

import {Pagination} from '@/components';

describe('<Pagination>', () => {
    let props;
    const getComponent = () => render(Pagination, props);
    beforeEach(() => {
        props = {
            total: 4,
            perPage: 2,
            currentPage: 2,
            onChange: jest.fn()
        };
    });
    afterEach(tearDown);

    describe('when there is one page', () => {
        beforeEach(() => {
            props.total = 1;
            props.perPage = 1;
        });

        it('should not render pagination component', () => {
            const {container} = getComponent();
            expect(queryByTestId(container, 'pagination')).toBeNull();
        });
    });

    describe('when there are more than one pages', () => {
        beforeEach(() => {
            props.total = 12;
            props.perPage = 1;
        });

        it('should display a pagination', () => {
            const {container} = getComponent();
            const pagination = getByTestId(container, 'pagination');
            expect(pagination).toBeInTheDocument();
        });

        it('should display four pages', () => {
            const {container} = getComponent();
            const pagination = getByTestId(container, 'pagination');
            expect(getByTestId(pagination, 'page-1')).toBeInTheDocument();
            expect(getByTestId(pagination, 'page-2')).toBeInTheDocument();
            expect(getByTestId(pagination, 'page-3')).toBeInTheDocument();
            expect(getByTestId(pagination, 'page-4')).toBeInTheDocument();
        });

        it('should render a button to go to next page', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'next-button')).toBeInTheDocument();
        });

        describe('when the button to go to the next page is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const nextButton = getByTestId(container, 'next-button');
                fireEvent.click(nextButton);
            });

            it('should render more pages', () => {
                const {container} = getComponent();
                const pagination = getByTestId(container, 'pagination');
                expect(getByTestId(pagination, 'page-5')).toBeInTheDocument();
                expect(getByTestId(pagination, 'page-6')).toBeInTheDocument();
                expect(getByTestId(pagination, 'page-7')).toBeInTheDocument();
            });
        });

        describe('when `props.currentPage` is greater than four', () => {
            beforeEach(() => {
                props.currentPage = 5;
            });

            it('should render a button to back to previous page', () => {
                const {container} = getComponent();
                expect(getByTestId(container, 'back-button')).toBeInTheDocument();
            });

            describe('when the button to back to the previous page is clicked', () => {
                beforeEach(() => {
                    const {container} = getComponent();
                    const backButton = getByTestId(container, 'back-button');
                    fireEvent.click(backButton);
                });

                it('should display less pages', () => {
                    const {container} = getComponent();
                    const pagination = getByTestId(container, 'pagination');
                    expect(getByTestId(pagination, 'page-2')).toBeInTheDocument();
                    expect(getByTestId(pagination, 'page-3')).toBeInTheDocument();
                    expect(getByTestId(pagination, 'page-4')).toBeInTheDocument();
                });
            });
        });
    });

    describe('when totalPages is more greater than two', () => {
        beforeEach(() => {
            props.total = 5;
            props.perPage = 2;
        });

        it('should render a search button', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'pagination-search-button')).toBeInTheDocument();
        });

        describe('when a user writes a page', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const input = getByTestId(container, 'input');
                fireEvent.change(input, {target: {value: 2}});
            });

            it('should display the value into the input', () => {
                const {container} = getComponent();
                const input = getByTestId(container, 'input');
                expect(input).toHaveProperty('value', '2');
            });

            describe('when a user click the search button', () => {
                beforeEach(() => {
                    const {container} = getComponent();
                    const button = getByTestId(container, 'pagination-search-button');
                    fireEvent.click(button);
                });

                it('should fire `props.onChange`', () => {
                    expect(props.onChange).toHaveBeenCalledTimes(1);
                    expect(props.onChange).toHaveBeenCalledWith({target: {id: 'skip', value: 1}});
                });
            });
        });

        describe('when a page is clicked', () => {
            beforeEach(() => {
                const {container} = getComponent();
                const firstPage = getByTestId(container, 'page-1');
                fireEvent.click(firstPage);
            });

            it('should fire `props.onChange`', () => {
                expect(props.onChange).toHaveBeenCalledTimes(1);
                expect(props.onChange).toHaveBeenCalledWith({target: {id: 'skip', value: 0}});
            });
        });

        it('should render the total pages', () => {
            const {container} = getComponent();
            const totalPages = getByTestId(container, 'total-pages');
            expect(getByText(totalPages, '3')).toBeInTheDocument();
        });
    });
});
