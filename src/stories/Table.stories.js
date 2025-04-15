import {fn} from '@storybook/test';

import Table from '../components/Table/index.jsx';
import '../components/output.css';

const sampleColumns = [
  {key: 'id', label: 'ID'},
  {key: 'name', label: 'Name'},
  {key: 'email', label: 'Email'},
  {key: 'status', label: 'Status'}
];

const sampleRows = [
  {key: '1', id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active'},
  {key: '2', id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive'},
  {key: '3', id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'Active'},
  {key: '4', id: '4', name: 'Alice Brown', email: 'alice@example.com', status: 'Pending'},
  {key: '5', id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', status: 'Active'}
];

export default {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    page: {control: 'number'},
    totalResults: {control: 'number'},
    resultsPerPage: {control: 'number'},
    isLoading: {control: 'boolean'},
    showPagination: {control: 'boolean'},
    noResults: {control: 'text'}
  },
  args: {
    onChangePage: fn(),
    onSort: fn(),
    columns: sampleColumns,
    rows: sampleRows,
    page: 1,
    totalResults: 100,
    resultsPerPage: 10,
    isLoading: false,
    showPagination: true,
    noResults: 'No se encontraron resultados'
  }
};

export const Default = {};

export const EmptyTable = {
  args: {
    rows: [],
    totalResults: 0
  }
};

export const LoadingState = {
  args: {
    isLoading: true,
    rows: []
  }
};

export const WithoutPagination = {
  args: {
    showPagination: false
  }
};

export const CustomNoResultsMessage = {
  args: {
    rows: [],
    totalResults: 0,
    noResults: 'No data available'
  }
};

export const LargeDataset = {
  args: {
    totalResults: 1500,
    resultsPerPage: 25,
    page: 3
  }
};
