import {getByLabelText, getByTestId, getByText, queryByTestId} from '@testing-library/react';

import Field from '../../components/Field.jsx';

describe('<Field>', () => {
  let props;
  const getComponent = () => render(Field, props);
  beforeEach(() => {
    props = {
      name: 'test',
      label: 'This is a label test',
      'data-testid': 'text-input'
    };
  });
  afterEach(tearDown);

  it('should display a label', () => {
    const {container} = getComponent();
    expect(getByLabelText(container, props.label)).toBeInTheDocument();
  });

  it('should render an input', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'text-input')).toBeInTheDocument();
  });

  describe('when `props.error` is not defined', () => {
    beforeEach(() => {
      props.error = undefined;
    });

    it('should not display `props.error`', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'error-message')).toBeNull();
    });
  });

  describe('when `props.error` is defined', () => {
    beforeEach(() => {
      props.error = 'Must write your name';
    });

    it('should display `props.error`', () => {
      const {container} = getComponent();
      expect(getByText(container, props.error)).toBeInTheDocument();
      expect(getByTestId(container, 'error-message')).toBeInTheDocument();
    });
  });
});
