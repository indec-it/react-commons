import {fn} from '@storybook/test';

import Typeahead from '../components/Typeahead.jsx';
import '../components/output.css';

const sampleOptions = [
  {_id: '1', label: 'Apple', name: 'Apple'},
  {_id: '2', label: 'Banana', name: 'Banana'},
  {_id: '3', label: 'Cherry', name: 'Cherry'},
  {_id: '4', label: 'Grape', name: 'Grape'},
  {_id: '5', label: 'Orange', name: 'Orange'},
  {_id: '6', label: 'Strawberry', name: 'Strawberry'}
];

const countryOptions = [
  {_id: 'ar', label: 'Argentina', name: 'Argentina'},
  {_id: 'br', label: 'Brasil', name: 'Brasil'},
  {_id: 'cl', label: 'Chile', name: 'Chile'},
  {_id: 'co', label: 'Colombia', name: 'Colombia'},
  {_id: 'mx', label: 'México', name: 'México'},
  {_id: 'pe', label: 'Perú', name: 'Perú'},
  {_id: 'uy', label: 'Uruguay', name: 'Uruguay'},
  {_id: 've', label: 'Venezuela', name: 'Venezuela'}
];

const personOptions = [
  {_id: '1', label: 'John Doe', name: 'John Doe'},
  {_id: '2', label: 'Jane Smith', name: 'Jane Smith'},
  {_id: '3', label: 'Michael Johnson', name: 'Michael Johnson'},
  {_id: '4', label: 'Sarah Wilson', name: 'Sarah Wilson'},
  {_id: '5', label: 'David Brown', name: 'David Brown'}
];

export default {
  title: 'Typeahead',
  component: Typeahead,
  tags: ['autodocs'],
  argTypes: {
    disabled: {control: 'boolean'},
    noResults: {control: 'boolean'},
    error: {control: 'text'},
    label: {control: 'text'},
    inputValue: {control: 'text'},
    maxLength: {control: 'number'},
    placeholder: {control: 'text'}
  },
  args: {
    onSelect: fn(),
    onInputChange: fn(),
    options: sampleOptions
  }
};

export const Default = {
  args: {
    label: 'Search fruits',
    placeholder: 'Type to search...'
  }
};

export const WithValue = {
  args: {
    label: 'Selected fruit',
    value: sampleOptions[0],
    placeholder: 'Type to search...'
  }
};

export const WithInputValue = {
  args: {
    label: 'Type to search',
    inputValue: 'App',
    placeholder: 'Type to search...'
  }
};

export const WithError = {
  args: {
    label: 'Search with error',
    error: 'Please select a valid option',
    placeholder: 'Type to search...'
  }
};

export const Disabled = {
  args: {
    label: 'Disabled typeahead',
    disabled: true,
    value: sampleOptions[1],
    placeholder: 'Disabled field'
  }
};

export const NoResults = {
  args: {
    label: 'No results found',
    noResults: true,
    options: [],
    placeholder: 'Type to search...'
  }
};

export const WithMaxLength = {
  args: {
    label: 'Limited input (10 chars)',
    maxLength: 10,
    placeholder: 'Max 10 characters...'
  }
};

export const CountrySearch = {
  args: {
    label: 'Search country',
    options: countryOptions,
    placeholder: 'Type country name...'
  }
};

export const PersonSearch = {
  args: {
    label: 'Search person',
    options: personOptions,
    placeholder: 'Type person name...'
  }
};

export const EmptyOptions = {
  args: {
    label: 'No options available',
    options: [],
    placeholder: 'Type to search...'
  }
};

export const LongList = {
  args: {
    label: 'Long options list',
    options: [
      ...sampleOptions,
      {_id: '7', label: 'Pineapple', name: 'Pineapple'},
      {_id: '8', label: 'Watermelon', name: 'Watermelon'},
      {_id: '9', label: 'Mango', name: 'Mango'},
      {_id: '10', label: 'Kiwi', name: 'Kiwi'},
      {_id: '11', label: 'Peach', name: 'Peach'},
      {_id: '12', label: 'Plum', name: 'Plum'},
      {_id: '13', label: 'Apricot', name: 'Apricot'},
      {_id: '14', label: 'Blueberry', name: 'Blueberry'},
      {_id: '15', label: 'Raspberry', name: 'Raspberry'}
    ],
    placeholder: 'Type to search fruits...'
  }
};

export const WithoutLabel = {
  args: {
    options: sampleOptions,
    placeholder: 'Search without label...'
  }
};

export const KeyboardNavigation = {
  args: {
    label: 'Use arrow keys to navigate',
    options: sampleOptions,
    placeholder: 'Try arrow keys and Enter...'
  },
  parameters: {
    docs: {
      description: {
        story:
          'This typeahead supports keyboard navigation. Use arrow keys to navigate options, Enter to select, and Escape to close.'
      }
    }
  }
};
