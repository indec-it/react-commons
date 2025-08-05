import {fn} from '@storybook/test';

import Select from '../components/Select.jsx';
import '../components/output.css';

const sampleOptions = [
  {value: 1, label: 'Option 1'},
  {value: 2, label: 'Option 2'},
  {value: 3, label: 'Option 3'},
  {value: 4, label: 'Very Long Option Name That Should Wrap'},
  {value: 5, label: 'Another Option'}
];

const countryOptions = [
  {value: 'ar', label: 'Argentina'},
  {value: 'br', label: 'Brasil'},
  {value: 'cl', label: 'Chile'},
  {value: 'co', label: 'Colombia'},
  {value: 'pe', label: 'Perú'},
  {value: 'uy', label: 'Uruguay'}
];

export default {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    loading: {control: 'boolean'},
    disabled: {control: 'boolean'},
    placeholder: {control: 'text'},
    keyValue: {control: 'text'},
    value: {control: 'text'}
  },
  args: {
    options: sampleOptions,
    onSelect: fn(),
    onClean: fn(),
    name: 'select-field'
  }
};

export const Default = {};

export const WithValue = {
  args: {
    value: 2
  }
};

export const WithPlaceholder = {
  args: {
    placeholder: 'Choose an option...'
  }
};

export const Loading = {
  args: {
    loading: true
  }
};

export const Disabled = {
  args: {
    disabled: true,
    value: 1
  }
};

export const EmptyOptions = {
  args: {
    options: []
  }
};

export const ManyOptions = {
  args: {
    options: [
      ...sampleOptions,
      {value: 6, label: 'Option 6'},
      {value: 7, label: 'Option 7'},
      {value: 8, label: 'Option 8'},
      {value: 9, label: 'Option 9'},
      {value: 10, label: 'Option 10'},
      {value: 11, label: 'Option 11'},
      {value: 12, label: 'Option 12'},
      {value: 13, label: 'Option 13'},
      {value: 14, label: 'Option 14'},
      {value: 15, label: 'Option 15'}
    ]
  }
};

export const CountrySelect = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country...',
    value: 'ar'
  }
};

export const CustomKeyValue = {
  args: {
    options: [
      {id: 'opt1', name: 'First Option'},
      {id: 'opt2', name: 'Second Option'},
      {id: 'opt3', name: 'Third Option'}
    ],
    keyValue: 'id',
    placeholder: 'Select option...'
  },
  render: args =>
    Select({
      ...args,
      options: args.options.map(opt => ({...opt, label: opt.name}))
    })
};

export const Searchable = {
  args: {
    options: [
      {value: 'apple', label: 'Apple'},
      {value: 'banana', label: 'Banana'},
      {value: 'cherry', label: 'Cherry'},
      {value: 'grape', label: 'Grape'},
      {value: 'orange', label: 'Orange'},
      {value: 'strawberry', label: 'Strawberry'}
    ],
    placeholder: 'Type to search fruits...'
  }
};

export const WithError = {
  args: {
    label: 'Country',
    error: 'Please select a valid country',
    placeholder: 'Select a country...'
  }
};

export const WithLabelAndError = {
  args: {
    label: 'Product Category',
    value: 2,
    error: 'This category is not available in your region'
  }
};
