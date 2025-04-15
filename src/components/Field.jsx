import React from 'react';

import ErrorMessage from './ErrorMessage.jsx';
import {InfoIcon} from './Icons';

export default function Field({name, label, error, type = 'text', onChange, onBlur, disabled, tooltip, ...rest}) {
  const handleBlur = e => {
    const event = e;
    if (type === 'text' && e.target.value.length > 0) {
      event.target.value = e.target.value.trim();
      onChange(event);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-[17px] text-black text-xl font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          aria-label={label}
          className={`w-full px-4 py-2 border-2 border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${
            error ? 'border-error focus:ring-error' : 'border-gray-300 focus:ring-primary'
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${tooltip ? 'pr-10' : ''}`}
          type={type}
          onChange={onChange}
          disabled={disabled}
          {...rest}
          onBlur={handleBlur}
        />
        {tooltip && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 group">
            <InfoIcon className="w-5 h-5 text-gray-400" />
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
              <div className="bg-gray-900 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                {tooltip}
                <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      {error && <ErrorMessage error={error} />}
    </div>
  );
}
