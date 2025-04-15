import React from 'react';

import {XIcon} from '../Icons';

export default function Buttons({children, onClose}) {
  return children ? (
    children
  ) : (
    <div className="flex flex-col sm:flex-row justify-center mt-4 pt-4">
      <button
        className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-500 bg-white rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        onClick={onClose}
      >
        <XIcon className="w-4 h-4 mr-2" />
        Cancelar
      </button>
    </div>
  );
}
