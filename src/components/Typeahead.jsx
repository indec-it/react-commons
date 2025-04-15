import React from 'react';

import {XIcon, ChevronDownIcon} from './Icons';

export default function Typeahead({
  label,
  value,
  onSelect,
  onInputChange,
  options = [],
  noResults = false,
  error,
  inputValue,
  maxLength,
  disabled = false,
  ...props
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(-1);
  const inputRef = React.useRef(null);
  const listRef = React.useRef(null);

  const handleInputChange = e => {
    const newValue = e.target.value;
    onInputChange(newValue);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleOptionSelect = option => {
    onSelect(option);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleClear = () => {
    onInputChange('');
    onSelect({_id: ''});
    setIsOpen(false);
  };

  const handleKeyDown = e => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => (prev < options.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleOptionSelect(options[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const displayValue = value ? value.label || value.name || '' : inputValue || '';

  React.useEffect(() => {
    const handleClickOutside = event => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        listRef.current &&
        !listRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={displayValue}
          onChange={disabled ? undefined : handleInputChange}
          onKeyDown={disabled ? undefined : handleKeyDown}
          onFocus={disabled ? undefined : () => setIsOpen(true)}
          maxLength={maxLength}
          className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none ${
            error
              ? 'border-red-500 bg-white'
              : disabled
                ? 'border-gray-300 bg-gray-100 cursor-not-allowed text-gray-600'
                : 'border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          disabled={disabled}
          {...props}
        />

        {displayValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <XIcon className="w-4 h-4" />
          </button>
        )}

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </div>

        {isOpen && options.length > 0 && !disabled && (
          <div
            ref={listRef}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
          >
            {options.map((option, index) => (
              <div
                key={option._id || index}
                className={`px-3 py-2 cursor-pointer ${
                  index === highlightedIndex ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                }`}
                onClick={() => handleOptionSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {option.label || option.name || ''}
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {noResults && (
        <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">No se encontraron resultados.</p>
        </div>
      )}
    </div>
  );
}
