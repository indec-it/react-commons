import {fn} from '@storybook/test';

import Button from '../components/Button.jsx';
import * as Icons from '../components/Icons';
import '../components/output.css';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'}
  },
  args: {onClick: fn(), label: 'Click'}
};

export const Default = {};

export const Disabled = {
  args: {
    disabled: true
  }
};

export const WithCustomStyle = {
  args: {
    style: 'bg-red-500'
  }
};

export const WithIcon = {
  render: args => {
    return Button({
      ...args,
      style:
        'mb-2 cursor-pointer font-semibold bg-blue-700 transition text-white uppercase m-auto h-10 w-full rounded-lg disabled:bg-gray-300 disabled:cursor-default flex items-center justify-center gap-2',
      label: [Icons.SearchIcon({size: 16}), 'Search']
    });
  }
};
