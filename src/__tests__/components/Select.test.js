import {getByText, fireEvent, getByDisplayValue, queryByText} from '@testing-library/react';

import Select from '../../components/Select.jsx';

describe('<Select>', () => {
  let props;
  const getComponent = () => render(Select, props);

  beforeEach(() => {
    props = {
      options: [
        {value: 1, label: 'Option 1'},
        {value: 2, label: 'Option 2'},
        {value: 3, label: 'Option 3'}
      ],
      onSelect: jest.fn(),
      name: 'test-select',
      placeholder: 'Select an option'
    };
  });
  afterEach(tearDown);

  it('should render input with placeholder', () => {
    const {container} = getComponent();
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', props.placeholder);
  });

  it('should render chevron down icon', () => {
    const {container} = getComponent();
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('should open dropdown when input is clicked', () => {
    const {container} = getComponent();
    const input = container.querySelector('input');
    fireEvent.click(input);

    expect(getByText(container, 'Option 1')).toBeInTheDocument();
    expect(getByText(container, 'Option 2')).toBeInTheDocument();
    expect(getByText(container, 'Option 3')).toBeInTheDocument();
  });

  it('should call onSelect when option is clicked', () => {
    const {container} = getComponent();
    const input = container.querySelector('input');
    fireEvent.click(input);

    const option = getByText(container, 'Option 1');
    fireEvent.click(option);

    expect(props.onSelect).toHaveBeenCalledWith(props.name, 1);
  });

  describe('when value is provided', () => {
    beforeEach(() => {
      props.value = 2;
    });

    it('should display selected option label', () => {
      const {container} = getComponent();
      expect(getByDisplayValue(container, 'Option 2')).toBeInTheDocument();
    });
  });

  describe('when disabled is true', () => {
    beforeEach(() => {
      props.disabled = true;
    });

    it('should disable the input', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');
      expect(input).toBeDisabled();
    });

    it('should not open dropdown when clicked', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');
      fireEvent.click(input);

      expect(queryByText(container, 'Option 1')).toBeNull();
    });
  });

  describe('when loading is true', () => {
    beforeEach(() => {
      props.loading = true;
    });

    it('should show loading message', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');
      fireEvent.click(input);

      expect(getByText(container, 'Cargando...')).toBeInTheDocument();
    });
  });

  describe('when options array is empty', () => {
    beforeEach(() => {
      props.options = [];
    });

    it('should show no options message', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');
      fireEvent.click(input);

      expect(getByText(container, 'No hay opciones')).toBeInTheDocument();
    });
  });

  describe('when label is provided', () => {
    beforeEach(() => {
      props.label = 'Test Label';
    });

    it('should display the label', () => {
      const {container} = getComponent();
      expect(getByText(container, 'Test Label')).toBeInTheDocument();
    });

    it('should associate label with input', () => {
      const {container} = getComponent();
      const label = getByText(container, 'Test Label');
      const input = container.querySelector('input');
      expect(label).toHaveAttribute('for', props.name);
      expect(input).toHaveAttribute('id', props.name);
    });
  });

  describe('when error is provided', () => {
    beforeEach(() => {
      props.error = 'This field is required';
    });

    it('should display error message when dropdown is closed', () => {
      const {container} = getComponent();
      expect(getByText(container, 'This field is required')).toBeInTheDocument();
    });

    it('should hide error message when dropdown is open', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');

      expect(getByText(container, 'This field is required')).toBeInTheDocument();

      fireEvent.click(input);

      expect(queryByText(container, 'This field is required')).toBeNull();
    });

    it('should show error message again when dropdown is closed', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');

      fireEvent.click(input);
      expect(queryByText(container, 'This field is required')).toBeNull();

      const backdrop = container.querySelector('.fixed');
      fireEvent.click(backdrop);

      expect(getByText(container, 'This field is required')).toBeInTheDocument();
    });

    it('should apply error styling to input', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');
      expect(input).toHaveClass('border-error');
    });
  });

  describe('when both label and error are provided', () => {
    beforeEach(() => {
      props.label = 'Country';
      props.error = 'Please select a country';
    });

    it('should display both label and error', () => {
      const {container} = getComponent();
      expect(getByText(container, 'Country')).toBeInTheDocument();
      expect(getByText(container, 'Please select a country')).toBeInTheDocument();
    });
  });
});
