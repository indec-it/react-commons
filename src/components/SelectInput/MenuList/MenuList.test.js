import React from 'react';
import {getByTestId, queryByTestId} from '@testing-library/react';

import MenuList from '@/components/SelectInput/MenuList';

describe('<MenuList>', () => {
    let props;
    const getComponent = () => render(MenuList, props);
    beforeEach(() => {
        props = {
            selectProps: {
                components: {
                    MenuListFooter: React.createElement('div', {'data-testid': 'menu-list-footer'})
                }
            },
            getStyles: jest.fn(),
            cx: jest.fn(),
            hasMore: false,
            children: React.createElement('div')
        };
    });
    afterEach(tearDown);

    it('should not display a menu list footer', () => {
        const {container} = getComponent();
        expect(queryByTestId(container, 'menu-list-footer')).toBeNull();
    });

    describe('when `hasMore` is defined', () => {
        beforeEach(() => {
            props.hasMore = true;
        });

        it('should display a menu list footer', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'menu-list-footer')).toBeInTheDocument();
        });
    });
});
