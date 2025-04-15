import {fn} from '@storybook/test';

import Field from '../components/Field.jsx';
import '../components/output.css';

export default {
  title: 'Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url']
    },
    disabled: {control: 'boolean'},
    error: {control: 'text'},
    tooltip: {control: 'text'}
  },
  args: {
    label: 'Write your name',
    name: 'name',
    onChange: fn(),
    onBlur: fn()
  }
};

export const Default = {};

export const WithError = {
  args: {
    error: 'Must write your name'
  }
};

export const Disabled = {
  args: {
    disabled: true,
    value: 'This field is disabled'
  }
};

export const WithTooltip = {
  args: {
    tooltip: 'Enter your full legal name as it appears on your ID'
  }
};

export const WithPlaceholder = {
  args: {
    placeholder: 'John Doe'
  }
};

export const WithDefaultValue = {
  args: {
    label: 'Pre-filled Field',
    defaultValue: 'Default text value'
  }
};

export const DisabledWithError = {
  args: {
    disabled: true,
    error: 'This field has an error',
    value: 'Disabled with error'
  }
};
