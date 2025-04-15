import {getByText} from '@testing-library/react';

import Button from '../../components/Button.jsx';

describe('<Button>', () => {
  let props;
  const getComponent = () => render(Button, props);
  beforeEach(() => {
    props = {
      label: 'Log in'
    };
  });

  it('should display `props.label`', () => {
    const {container} = getComponent();
    expect(getByText(container, props.label)).toBeInTheDocument();
  });
});
