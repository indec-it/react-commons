import {fn} from '@storybook/test';

import Header from '../components/Header/index.jsx';
import '../components/output.css';

export default {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    token: {control: 'text'},
    user: {control: 'object'}
  },
  args: {
    onLogout: fn(),
    onRedirect: fn(),
    token: 'sample-token',
    user: {
      name: 'John',
      lastName: 'Doe'
    }
  }
};

export const Default = {};

export const NotLoggedIn = {
  args: {
    token: null,
    user: null
  }
};

export const LoggedIn = {
  args: {
    token: 1,
    user: {
      name: 'Christopher Alexander',
      lastName: 'Montgomery-Richardson'
    }
  }
};

export const WithMenuItems = {
  args: {
    token: '1',
    user: {
      name: 'Christopher Alexander',
      lastName: 'Montgomery-Richardson'
    },
    items: [
      {name: 'Dashboard', path: 'dashboard'},
      {name: 'Products', path: 'products'},
      {name: 'Orders', path: 'orders'},
      {name: 'Customers', path: 'customers'},
      {name: 'Reports', path: 'reports'}
    ]
  }
};
