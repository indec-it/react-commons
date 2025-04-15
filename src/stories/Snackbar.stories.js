import {fn} from '@storybook/test';

import Snackbar from '../components/Snackbar.jsx';
import '../components/output.css';

export default {
  title: 'Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    open: {control: 'boolean'},
    message: {control: 'text'},
    severity: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info']
    }
  },
  args: {
    onClose: fn(),
    open: true,
    message: 'This is a snackbar message'
  }
};

export const Default = {};

export const Success = {
  args: {
    severity: 'success',
    message: 'Operation completed successfully!',
    onClose: () => {}
  }
};

export const Error = {
  args: {
    severity: 'error',
    message: 'An error occurred while processing your request.',
    onClose: () => {}
  }
};

export const Warning = {
  args: {
    severity: 'warning',
    message: 'Please check your input and try again.',
    onClose: () => {}
  }
};

export const Info = {
  args: {
    severity: 'info',
    message: 'Here is some helpful information.'
  }
};

export const LongMessage = {
  args: {
    severity: 'info',
    message: 'This is a very long message to demonstrate how the snackbar handles longer text content and wrapping behavior.'
  }
};
