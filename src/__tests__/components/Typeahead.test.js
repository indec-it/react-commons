import {getByText, fireEvent, getByDisplayValue, queryByText, getByLabelText} from '@testing-library/react';

import Typeahead from '../../components/Typeahead.jsx';

describe('<Typeahead>', () => {
  let props;
  const getComponent = () => render(Typeahead, props);
  
  beforeEach(() => {
    props = {
      options: [
        {_id: '1', label: 'Apple', name: 'Apple'},
        {_id: '2', label: 'Banana', name: 'Banana'},
        {_id: '3', label: 'Cherry', name: 'Cherry'}
      ],
      onSelect: jest.fn(),
      onInputChange: jest.fn(),
      label: 'Search fruits',
      placeholder: 'Type to search...'
    };
  });
  afterEach(tearDown);

  it('should render label when provided', () => {
    const {container} = getComponent();
    expect(getByText(container, props.label)).toBeInTheDocument();
  });

  it('should render input with placeholder', () => {
    const {container} = getComponent();
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', props.placeholder);
  });

  it('should render chevron down icon', () => {
    const {container} = getComponent();
    const chevronIcon = container.querySelector('svg:last-child');
    expect(chevronIcon).toBeInTheDocument();
  });

  it('should call onInputChange when typing', () => {
    const {container} = getComponent();
    const input = container.querySelector('input');
    fireEvent.change(input, {target: {value: 'App'}});
    
    expect(props.onInputChange).toHaveBeenCalledWith('App');
  });

  it('should open dropdown on focus', () => {
    const {container} = getComponent();
    const input = container.querySelector('input');
    fireEvent.focus(input);
    
    expect(getByText(container, 'Apple')).toBeInTheDocument();
    expect(getByText(container, 'Banana')).toBeInTheDocument();
  });

  it('should call onSelect when option is clicked', () => {
    const {container} = getComponent();
    const input = container.querySelector('input');
    fireEvent.focus(input);
    
    const option = getByText(container, 'Apple');
    fireEvent.click(option);
    
    expect(props.onSelect).toHaveBeenCalledWith(props.options[0]);
  });

  describe('when value is provided', () => {
    beforeEach(() => {
      props.value = props.options[0];
    });

    it('should display selected value', () => {
      const {container} = getComponent();
      expect(getByDisplayValue(container, 'Apple')).toBeInTheDocument();
    });

    it('should show clear button', () => {
      const {container} = getComponent();
      const clearButton = container.querySelector('button[type="button"]');
      expect(clearButton).toBeInTheDocument();
    });

    it('should clear value when clear button is clicked', () => {
      const {container} = getComponent();
      const clearButton = container.querySelector('button[type="button"]');
      fireEvent.click(clearButton);
      
      expect(props.onInputChange).toHaveBeenCalledWith('');
      expect(props.onSelect).toHaveBeenCalledWith({_id: ''});
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

    it('should not show clear button', () => {
      props.value = props.options[0];
      const {container} = getComponent();
      const clearButton = container.querySelector('button[type="button"]');
      expect(clearButton).toBeNull();
    });
  });

  describe('when error is provided', () => {
    beforeEach(() => {
      props.error = 'Please select a valid option';
    });

    it('should display error message', () => {
      const {container} = getComponent();
      expect(getByText(container, props.error)).toBeInTheDocument();
    });

    it('should have error styling on input', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');
      expect(input).toHaveClass('border-red-500');
    });
  });

  describe('when noResults is true', () => {
    beforeEach(() => {
      props.noResults = true;
    });

    it('should show no results message', () => {
      const {container} = getComponent();
      expect(getByText(container, 'No se encontraron resultados.')).toBeInTheDocument();
    });
  });

  describe('keyboard navigation', () => {
    it('should navigate options with arrow keys', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');
      fireEvent.focus(input);
      
      fireEvent.keyDown(input, {key: 'ArrowDown'});
      const firstOption = getByText(container, 'Apple');
      expect(firstOption).toHaveClass('bg-blue-50', 'text-blue-700');
    });

    it('should select option with Enter key', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');
      fireEvent.focus(input);
      fireEvent.keyDown(input, {key: 'ArrowDown'});
      fireEvent.keyDown(input, {key: 'Enter'});
      
      expect(props.onSelect).toHaveBeenCalledWith(props.options[0]);
    });

    it('should close dropdown with Escape key', () => {
      const {container} = getComponent();
      const input = container.querySelector('input');
      fireEvent.focus(input);
      fireEvent.keyDown(input, {key: 'Escape'});
      
      expect(queryByText(container, 'Apple')).toBeNull();
    });
  });
});