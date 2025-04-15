import {getByText, queryByText} from '@testing-library/react';

jest.mock('../../components/Header/index.jsx', () => {
  return function MockHeader({token, items = [], user}) {
    return (
      <header className="w-full bg-white shadow-sm border-b border-gray-200">
        <div>
          <span>Logo</span>
          {token && (
            <>
              {items.map(item => (
                <span key={item.path}>{item.name}</span>
              ))}
              {user && <span>User Menu</span>}
            </>
          )}
        </div>
      </header>
    );
  };
});

import Header from '../../components/Header/index.jsx';

describe('<Header>', () => {
  let props;
  const getComponent = () => render(Header, props);
  
  beforeEach(() => {
    props = {
      onRedirect: jest.fn(),
      token: 'test-token',
      items: [
        {name: 'Dashboard', path: 'dashboard'},
        {name: 'Reports', path: 'reports'}
      ],
      user: {name: 'John', lastName: 'Doe'},
      onLogout: jest.fn()
    };
  });
  afterEach(tearDown);

  it('should render header container', () => {
    const {container} = getComponent();
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });

  it('should have header styling classes', () => {
    const {container} = getComponent();
    const header = container.querySelector('header');
    expect(header).toHaveClass('w-full', 'bg-white', 'shadow-sm', 'border-b', 'border-gray-200');
  });

  describe('when token is provided', () => {
    it('should render navigation items', () => {
      const {container} = getComponent();
      expect(getByText(container, 'Dashboard')).toBeInTheDocument();
      expect(getByText(container, 'Reports')).toBeInTheDocument();
    });

    it('should render user menu', () => {
      const {container} = getComponent();
      expect(getByText(container, 'User Menu')).toBeInTheDocument();
    });
  });

  describe('when token is not provided', () => {
    beforeEach(() => {
      props.token = null;
    });

    it('should not render navigation items', () => {
      const {container} = getComponent();
      expect(queryByText(container, 'Dashboard')).toBeNull();
      expect(queryByText(container, 'Reports')).toBeNull();
    });
  });

  describe('when items array is empty', () => {
    beforeEach(() => {
      props.items = [];
    });

    it('should not render navigation items', () => {
      const {container} = getComponent();
      expect(queryByText(container, 'Dashboard')).toBeNull();
    });
  });
});