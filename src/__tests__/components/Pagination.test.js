import {getByText, fireEvent} from '@testing-library/react';

import Pagination from '../../components/Pagination.jsx';

describe('<Pagination>', () => {
  let props;
  const getComponent = () => render(Pagination, props);
  
  beforeEach(() => {
    props = {
      page: 2,
      total: 100,
      perPage: 10,
      onChange: jest.fn()
    };
  });
  afterEach(tearDown);

  it('should render current page number', () => {
    const {container} = getComponent();
    expect(getByText(container, '2')).toBeInTheDocument();
  });

  it('should render page navigation buttons', () => {
    const {container} = getComponent();
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should render page info text', () => {
    const {container} = getComponent();
    expect(getByText(container, /11 - 20 \| 100/)).toBeInTheDocument();
  });

  it('should call onChange when page button is clicked', () => {
    const {container} = getComponent();
    const pageButton = getByText(container, '1');
    fireEvent.click(pageButton);
    
    expect(props.onChange).toHaveBeenCalledWith(1);
  });

  it('should have disabled buttons when on first page', () => {
    props.page = 1;
    const {container} = getComponent();
    const firstButton = container.querySelector('button[disabled]');
    expect(firstButton).toBeInTheDocument();
  });

  it('should render go to page input', () => {
    const {container} = getComponent();
    const input = container.querySelector('input[type="number"]');
    expect(input).toBeInTheDocument();
  });

  it('should render go to page label', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Ir a la página:')).toBeInTheDocument();
  });

  describe('when on last page', () => {
    beforeEach(() => {
      props.page = 10;
    });

    it('should have disabled last navigation buttons', () => {
      const {container} = getComponent();
      const buttons = container.querySelectorAll('button[disabled]');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('when total is small', () => {
    beforeEach(() => {
      props.total = 5;
      props.page = 1;
    });

    it('should render single page correctly', () => {
      const {container} = getComponent();
      expect(getByText(container, /1 - 5 \| 5/)).toBeInTheDocument();
    });
  });
});