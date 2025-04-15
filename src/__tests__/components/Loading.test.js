import {getByTestId} from '@testing-library/react';

import Loading from '../../components/Loading.jsx';

describe('<Loading>', () => {
  let props;
  const getComponent = () => render(Loading, props);
  
  beforeEach(() => {
    props = {};
  });
  afterEach(tearDown);

  it('should render loading spinner', () => {
    const {container} = getComponent();
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should have flex centering classes', () => {
    const {container} = getComponent();
    const loadingContainer = container.firstChild;
    expect(loadingContainer).toHaveClass('flex', 'justify-center', 'items-center');
  });

  it('should render spinner with correct classes', () => {
    const {container} = getComponent();
    const spinner = getByTestId(container, 'loading');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('animate-spin', 'rounded-full', 'h-10', 'w-10', 'border-b-2', 'border-blue-600');
  });
});