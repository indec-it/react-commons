import {fn} from '@storybook/test';

import {Pagination} from '../components/Pagination.jsx';
import '../components/output.css';

export default {
  title: 'Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    total: {control: 'number'},
    perPage: {control: 'number'},
    page: {control: 'number'},
    pageRowsCount: {control: 'number'}
  },
  args: {
    onChange: fn(),
    total: 100,
    perPage: 10,
    page: 1,
    pageRowsCount: 0
  }
};

export const Default = {};

export const WithManyPages = {
  args: {
    total: 500,
    perPage: 10,
    page: 5
  }
};

export const WithFewPages = {
  args: {
    total: 25,
    perPage: 10,
    page: 2
  }
};

export const FirstPage = {
  args: {
    total: 100,
    perPage: 10,
    page: 1
  }
};

export const LastPage = {
  args: {
    total: 100,
    perPage: 10,
    page: 10
  }
};

export const SinglePage = {
  args: {
    total: 5,
    perPage: 10,
    page: 1
  }
};

export const WithCustomRowsCount = {
  args: {
    total: 100,
    perPage: 10,
    page: 3,
    pageRowsCount: 27
  }
};
