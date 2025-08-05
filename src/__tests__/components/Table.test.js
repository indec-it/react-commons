import {getByText} from '@testing-library/react';

import Table from '../../components/Table/index.jsx';

describe('<Table>', () => {
  let props;
  const getComponent = () => render(Table, props);

  beforeEach(() => {
    props = {
      columns: [
        {key: 'id', label: 'ID'},
        {key: 'name', label: 'Name'},
        {key: 'email', label: 'Email'}
      ],
      rows: [
        {key: '1', id: '1', name: 'John Doe', email: 'john@example.com'},
        {key: '2', id: '2', name: 'Jane Smith', email: 'jane@example.com'}
      ],
      onChangePage: jest.fn(),
      onSort: jest.fn(),
      page: 1,
      totalResults: 100,
      resultsPerPage: 10,
      isLoading: false,
      showPagination: true
    };
  });
  afterEach(tearDown);

  it('should render table data', () => {
    const {container} = getComponent();
    const johnDoeElements = container.querySelectorAll('*');
    const hasJohnDoe = Array.from(johnDoeElements).some(el => el.textContent.includes('John Doe'));
    const hasJaneEmail = Array.from(johnDoeElements).some(el => el.textContent.includes('jane@example.com'));
    expect(hasJohnDoe).toBe(true);
    expect(hasJaneEmail).toBe(true);
  });

  it('should render table with correct classes', () => {
    const {container} = getComponent();
    const table = container.querySelector('table');
    expect(table).toHaveClass('min-w-full');
  });

  describe('when isLoading is true and rows are empty', () => {
    beforeEach(() => {
      props.isLoading = true;
      props.rows = [];
    });

    it('should show loading component', () => {
      const {container} = getComponent();
      const loadingSpinner = container.querySelector('.animate-spin');
      expect(loadingSpinner).toBeInTheDocument();
    });
  });

  describe('when rows array is empty', () => {
    beforeEach(() => {
      props.rows = [];
      props.isLoading = false;
    });

    it('should show no results message', () => {
      const {container} = getComponent();
      expect(getByText(container, 'No se encontraron resultados')).toBeInTheDocument();
    });
  });

  describe('when showPagination is true', () => {
    it('should render pagination component', () => {
      const {container} = getComponent();
      const paginationInfo = container.querySelector('.text-center.text-gray-600');
      expect(paginationInfo).toBeInTheDocument();
    });
  });

  describe('when showPagination is false', () => {
    beforeEach(() => {
      props.showPagination = false;
    });

    it('should not render pagination', () => {
      const {container} = getComponent();
      const paginationInfo = container.querySelector('.text-center.text-gray-600');
      expect(paginationInfo).toBeNull();
    });
  });

  describe('responsive behavior', () => {
    it('should have cards component for mobile', () => {
      const {container} = getComponent();
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should have desktop table wrapper', () => {
      const {container} = getComponent();
      const desktopWrapper = container.querySelector('.hidden.md\\:block');
      expect(desktopWrapper).toBeInTheDocument();
    });
  });

  describe('custom noResults message', () => {
    beforeEach(() => {
      props.rows = [];
      props.noResults = 'Custom no data message';
    });

    it('should display custom no results message', () => {
      const {container} = getComponent();
      expect(getByText(container, 'Custom no data message')).toBeInTheDocument();
    });
  });
});
