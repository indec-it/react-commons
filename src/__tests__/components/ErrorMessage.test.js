import {getByText, getByTestId} from '@testing-library/react';

import ErrorMessage from '../../components/ErrorMessage.jsx';

describe('<ErrorMessage>', () => {
  let props;
  const getComponent = () => render(ErrorMessage, props);
  
  beforeEach(() => {
    props = {
      error: 'This is an error message'
    };
  });
  afterEach(tearDown);

  it('should display the error message', () => {
    const {container} = getComponent();
    expect(getByText(container, props.error)).toBeInTheDocument();
  });

  it('should have error-message test id', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'error-message')).toBeInTheDocument();
  });

  it('should have error styling classes', () => {
    const {container} = getComponent();
    const errorElement = getByTestId(container, 'error-message');
    expect(errorElement).toHaveClass('text-md', 'text-red-600');
  });

  describe('when error is empty', () => {
    beforeEach(() => {
      props.error = '';
    });

    it('should render empty error message', () => {
      const {container} = getComponent();
      const errorElement = getByTestId(container, 'error-message');
      expect(errorElement).toBeInTheDocument();
      expect(errorElement.textContent).toBe('');
    });
  });
});