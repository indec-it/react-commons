import {getByText, fireEvent} from '@testing-library/react';

import Modal from '../../components/Modal/index.jsx';

describe('<Modal>', () => {
  let props;
  const getComponent = () => render(Modal, props);
  
  beforeEach(() => {
    props = {
      show: true,
      onClose: jest.fn(),
      children: [
        <Modal.Title key="title" title="Test Modal" />,
        <Modal.Content key="content">Test content</Modal.Content>,
        <Modal.Buttons key="buttons" onClose={jest.fn()} />
      ]
    };
  });
  afterEach(tearDown);

  it('should render modal when show is true', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Test Modal')).toBeInTheDocument();
    expect(getByText(container, 'Test content')).toBeInTheDocument();
  });

  it('should have backdrop with blur effect', () => {
    const {container} = getComponent();
    const backdrop = container.querySelector('.backdrop-blur-sm');
    expect(backdrop).toBeInTheDocument();
  });

  it('should call onClose when backdrop is clicked', () => {
    const {container} = getComponent();
    const backdrop = container.querySelector('.backdrop-blur-sm');
    fireEvent.click(backdrop);
    expect(props.onClose).toHaveBeenCalled();
  });

  describe('when show is false', () => {
    beforeEach(() => {
      props.show = false;
    });

    it('should not render modal', () => {
      const {container} = getComponent();
      expect(container.firstChild).toBeNull();
    });
  });

  describe('when className is provided', () => {
    beforeEach(() => {
      props.className = 'custom-modal-class';
    });

    it('should apply custom className', () => {
      const {container} = getComponent();
      const modalContent = container.querySelector('.custom-modal-class');
      expect(modalContent).toBeInTheDocument();
    });
  });
});