import {getByTestId, getByText} from '@testing-library/react';

import {Card} from '@/components';

describe('<Card>', () => {
    const props = {};
    const getComponent = () => render(Card, props, {chakra: {}});
    afterEach(tearDown);

    it('should render a card', () => {
        const {container} = getComponent();
        const card = getByTestId(container, 'card');
        expect(card).toBeInTheDocument();
    });

    describe('when `props.title` is defined', () => {
        beforeEach(() => {
            props.title = 'Card title';
        });

        it('should display a label', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Card title')).toBeInTheDocument();
        });
    });

    describe('when `props.description` is defined', () => {
        beforeEach(() => {
            props.description = 'Card description';
        });

        it('should display a label', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Card description')).toBeInTheDocument();
        });
    });

    describe('when `props.children` is defined', () => {
        beforeEach(() => {
            props.children = 'Card children';
        });

        it('should display a label', () => {
            const {container} = getComponent();
            expect(getByText(container, 'Card children')).toBeInTheDocument();
        });
    });
});
