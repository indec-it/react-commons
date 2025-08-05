import {fn} from '@storybook/test';

import ButtonWithOptions from '../components/ButtonWithOptions.jsx';
import * as Icons from '../components/Icons';
import '../components/output.css';

export default {
  title: 'ButtonWithOptions',
  component: ButtonWithOptions,
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Array of option objects with id, label, onClick, icon, disabled, and selected properties'
    }
  }
};

const createOption = (id, label, config = {}) => ({
  id,
  label,
  onClick: fn(),
  ...config
});

export const Default = {
  args: {
    options: [createOption('1', 'Edit'), createOption('2', 'Delete'), createOption('3', 'Save')]
  }
};

export const WithDisabledOption = {
  args: {
    options: [createOption('1', 'Edit'), createOption('2', 'Delete (Disabled)', {disabled: true}), createOption('3', 'Save')]
  }
};

export const WithSelectedOption = {
  args: {
    options: [createOption('1', 'Edit'), createOption('2', 'Current View', {selected: true}), createOption('3', 'Save')]
  }
};

export const WithIcons = {
  render: () => {
    const options = [
      {
        id: '1',
        label: 'Edit',
        onClick: fn(),
        icon: Icons.EditIcon({className: 'w-4 h-4 text-blue-600'})
      },
      {
        id: '2',
        label: 'Delete',
        onClick: fn(),
        icon: Icons.DeleteIcon({className: 'w-4 h-4 text-red-600'})
      },
      {
        id: '3',
        label: 'Save',
        onClick: fn(),
        icon: Icons.SaveIcon({className: 'w-4 h-4 text-green-600'})
      }
    ];

    return ButtonWithOptions({options});
  }
};

export const WithLongLabels = {
  args: {
    options: [
      createOption('1', 'This is a very long option label that should wrap properly'),
      createOption('2', 'Another long label to test the layout and text wrapping behavior'),
      createOption('3', 'Short')
    ]
  }
};

export const ManyOptions = {
  args: {
    options: Array.from({length: 10}, (_, i) => createOption(String(i + 1), `Option ${i + 1}`))
  }
};
