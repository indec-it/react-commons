import React from 'react';
import {fn} from '@storybook/test';

import Modal from '../components/Modal/index.jsx';
import '../components/output.css';

export default {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    show: {control: 'boolean'},
    className: {control: 'text'}
  },
  args: {
    show: true,
    onClose: fn()
  }
};

export const Default = {
  render: args =>
    Modal({
      ...args,
      children: [
        React.createElement(Modal.Title, {key: 'title', title: 'Modal Title'}),
        React.createElement(
          Modal.Content,
          {key: 'content'},
          React.createElement(
            'p',
            {className: 'text-gray-600 mb-4'},
            'This is the modal content. You can put any content here.'
          )
        ),
        React.createElement(Modal.Buttons, {key: 'buttons', onClose: args.onClose})
      ]
    })
};

export const WithCustomButtons = {
  render: args =>
    Modal({
      ...args,
      children: [
        React.createElement(Modal.Title, {key: 'title', title: 'Confirm Action'}),
        React.createElement(
          Modal.Content,
          {key: 'content'},
          React.createElement('p', {className: 'text-gray-600 mb-4'}, 'Are you sure you want to delete this item?')
        ),
        React.createElement(
          Modal.Buttons,
          {key: 'buttons'},
          React.createElement('div', {className: 'flex gap-2 justify-center mt-4'}, [
            React.createElement(
              'button',
              {
                key: 'cancel',
                className: 'px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300',
                onClick: args.onClose
              },
              'Cancel'
            ),
            React.createElement(
              'button',
              {
                key: 'delete',
                className: 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
              },
              'Delete'
            )
          ])
        )
      ]
    })
};

export const WithForm = {
  render: args =>
    Modal({
      ...args,
      children: [
        React.createElement(Modal.Title, {key: 'title', title: 'Edit User'}),
        React.createElement(
          Modal.Content,
          {key: 'content'},
          React.createElement('form', {className: 'space-y-4'}, [
            React.createElement('div', {key: 'name-field'}, [
              React.createElement(
                'label',
                {key: 'name-label', className: 'block text-sm font-medium text-gray-700 mb-1'},
                'Name'
              ),
              React.createElement('input', {
                key: 'name-input',
                type: 'text',
                className: 'w-full px-3 py-2 border border-gray-300 rounded-md',
                placeholder: 'John Doe'
              })
            ]),
            React.createElement('div', {key: 'email-field'}, [
              React.createElement(
                'label',
                {key: 'email-label', className: 'block text-sm font-medium text-gray-700 mb-1'},
                'Email'
              ),
              React.createElement('input', {
                key: 'email-input',
                type: 'email',
                className: 'w-full px-3 py-2 border border-gray-300 rounded-md',
                placeholder: 'john@example.com'
              })
            ])
          ])
        ),
        React.createElement(
          Modal.Buttons,
          {key: 'buttons'},
          React.createElement('div', {className: 'flex gap-2 justify-center mt-6'}, [
            React.createElement(
              'button',
              {
                key: 'cancel',
                className: 'px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300',
                onClick: args.onClose
              },
              'Cancel'
            ),
            React.createElement(
              'button',
              {
                key: 'save',
                className: 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
              },
              'Save Changes'
            )
          ])
        )
      ]
    })
};

export const WithCustomClass = {
  args: {
    className: 'bg-blue-50 border-2 border-blue-200'
  },
  render: args =>
    Modal({
      ...args,
      children: [
        React.createElement(Modal.Title, {key: 'title', title: 'Custom Styled Modal'}),
        React.createElement(
          Modal.Content,
          {key: 'content'},
          React.createElement('p', {className: 'text-gray-600'}, 'This modal has custom background styling.')
        ),
        React.createElement(Modal.Buttons, {key: 'buttons', onClose: args.onClose})
      ]
    })
};
