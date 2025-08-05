import {getByText} from '@testing-library/react';

import Login from '../../components/Login/index.jsx';

describe('<Login>', () => {
  let props;
  const getComponent = () => render(Login, props);
  beforeEach(() => {
    props = {
      title: 'My Application'
    };
  });

  it('should display `My Application`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'My Application')).toBeInTheDocument();
  });

  it('should display `Login`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Login')).toBeInTheDocument();
  });
});
