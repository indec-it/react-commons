import {getByTestId, queryByText} from '@testing-library/react';

import ButtonWithOptions from '../../components/ButtonWithOptions.jsx';

describe('<ButtonWithOptions>', () => {
  let props;
  const getComponent = () => render(ButtonWithOptions, props);
  beforeEach(() => {
    props = {
      options: [
        {
          id: 1,
          label: 'Option 1',
          onClick: jest.fn()
        },
        {
          id: 2,
          label: 'Option 1',
          onClick: jest.fn()
        },
        {
          id: 3,
          label: 'Option 3',
          onClick: jest.fn()
        }
      ]
    };
  });

  it('should a render a button to show options', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'fade-button')).toBeInTheDocument();
  });

  it('should not display `props.options`', () => {
    const {container} = getComponent();
    props.options.forEach(option => {
      expect(queryByText(container, option.label)).toBeNull();
    });
  });
});
