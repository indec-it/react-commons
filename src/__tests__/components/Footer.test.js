import {getByText} from '@testing-library/react';

import Footer from '../../components/Footer.jsx';

describe('<Footer>', () => {
  let props;
  const getComponent = () => render(Footer, props);
  
  beforeEach(() => {
    props = {
      children: '© 2024 INDEC. All rights reserved.'
    };
  });
  afterEach(tearDown);

  it('should render children content', () => {
    const {container} = getComponent();
    expect(getByText(container, props.children)).toBeInTheDocument();
  });

  it('should have fixed positioning classes', () => {
    const {container} = getComponent();
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('fixed', 'bottom-0', 'w-full');
  });

  describe('when children is empty', () => {
    beforeEach(() => {
      props.children = '';
    });

    it('should render empty footer', () => {
      const {container} = getComponent();
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
      expect(footer.textContent).toBe('');
    });
  });
});