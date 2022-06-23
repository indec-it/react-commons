import {fireEvent, getByTestId} from '@testing-library/react';

import MenuListFooter from '@/components/SelectInput/MenuListFooter';

describe('<MenuListFooter>', () => {
    let props;
    const getComponent = () => render(MenuListFooter, props);
    beforeEach(() => {
        props = {
            onClick: jest.fn(),
            isLoading: false
        };
    });
    afterEach(tearDown);

    it('should display a menu list footer', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'menu-list-footer')).toBeInTheDocument();
    });

    it('should not has is loading attrib', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'load-more-button')).not.toHaveAttribute('data-loading');
    });

    describe('when load more button is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const button = getByTestId(container, 'load-more-button');
            fireEvent.click(button);
        });

        it('should fire `props.onClick`', () => {
            expect(props.onClick).toHaveBeenCalledTimes(1);
        });
    });

    describe('when `props.isLoading` is true', () => {
        beforeEach(() => {
            props.isLoading = true;
        });

        it('should has is loading attrib', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'load-more-button')).toHaveAttribute('data-loading');
        });
    });
});
