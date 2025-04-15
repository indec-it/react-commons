import {getByText, fireEvent, queryByText} from '@testing-library/react';

import Snackbar from '../../components/Snackbar.jsx';

describe('<Snackbar>', () => {
  let props;
  const getComponent = () => render(Snackbar, props);
  
  beforeEach(() => {
    props = {
      open: true,
      message: 'This is a test message',
      onClose: jest.fn(),
      severity: 'success'
    };
  });
  afterEach(tearDown);

  it('should render message when open is true', () => {
    const {container} = getComponent();
    expect(getByText(container, props.message)).toBeInTheDocument();
  });

  it('should render close button', () => {
    const {container} = getComponent();
    const closeButton = container.querySelector('button');
    expect(closeButton).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    const {container} = getComponent();
    const closeButton = container.querySelector('button');
    fireEvent.click(closeButton);
    
    expect(props.onClose).toHaveBeenCalled();
  });

  describe('when open is false', () => {
    beforeEach(() => {
      props.open = false;
    });

    it('should not render snackbar', () => {
      const {container} = getComponent();
      expect(queryByText(container, props.message)).toBeNull();
    });
  });

  describe('when severity is success', () => {
    beforeEach(() => {
      props.severity = 'success';
    });

    it('should have success styling', () => {
      const {container} = getComponent();
      const snackbar = container.querySelector('.bg-green-600');
      expect(snackbar).toBeInTheDocument();
    });
  });

  describe('when severity is error', () => {
    beforeEach(() => {
      props.severity = 'error';
    });

    it('should have error styling', () => {
      const {container} = getComponent();
      const snackbar = container.querySelector('.bg-red-600');
      expect(snackbar).toBeInTheDocument();
    });
  });

  describe('when severity is warning', () => {
    beforeEach(() => {
      props.severity = 'warning';
    });

    it('should have warning styling', () => {
      const {container} = getComponent();
      const snackbar = container.querySelector('.bg-orange-600');
      expect(snackbar).toBeInTheDocument();
    });
  });

  describe('when severity is info', () => {
    beforeEach(() => {
      props.severity = 'info';
    });

    it('should have info styling', () => {
      const {container} = getComponent();
      const snackbar = container.querySelector('.bg-blue-600');
      expect(snackbar).toBeInTheDocument();
    });
  });

  describe('auto hide functionality', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should auto close after 6 seconds', () => {
      getComponent();
      
      jest.advanceTimersByTime(6000);
      
      expect(props.onClose).toHaveBeenCalled();
    });
  });
});