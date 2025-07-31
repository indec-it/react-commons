import {fn} from '@storybook/test';

import Login from '../components/Login';
import '../components/output.css';

export default {
  title: 'Login',
  component: Login,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed on the left side of the login screen'
    }
  },
  args: {
    onLogin: fn(),
    title: 'Sistema INDEC'
  }
};

export const Default = {};

export const LoggingIn = {
  args: {
    isLoging: true
  }
};

export const WithError = {
  args: {
    title: 'Sistema INDEC',
    error: {
      status: 401,
      message: 'Unauthorized'
    }
  }
};
