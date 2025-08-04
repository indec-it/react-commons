import React from 'react';
import {ChevronDownIcon} from './Icons';
import ErrorMessage from './ErrorMessage';

export default function Select({
  options = [],
  loading = false,
  onClean,
  placeholder = '[Seleccione]',
  disabled = false,
  keyValue = 'value',
  name,
  value,
  onSelect,
  label,
  error
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = selectedValue => {
    onSelect(name, selectedValue ? selectedValue[keyValue] : undefined);
    if (onClean) {
      onClean();
    }
  };

  const selectedValue = React.useMemo(() => options.find(option => option[keyValue] === value) || {}, [value]);

  const filteredOptions = React.useMemo(() => {
    if (!searchTerm) {
      return options;
    }
    return options.filter(option => option.label?.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [options, searchTerm]);

  return (
    <div className="w-full relative">
      <div className="w-full">
        {label && (
          <label htmlFor={name} className="block text-[17px] text-black text-xl font-medium">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={name}
            name={name}
            type="text"
            aria-label={label}
            className={`w-full px-4 py-2 pr-10 border-2 border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${
              error ? 'border-error focus:ring-error' : 'border-gray-300 focus:ring-primary'
            } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
            placeholder={placeholder}
            value={selectedValue.label || ''}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onChange={e => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            disabled={disabled}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDownIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        {error && !isOpen && <ErrorMessage error={error} />}
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {loading ? (
            <div className="px-3 py-2 text-gray-500">Cargando...</div>
          ) : filteredOptions.length > 0 ? (
            <div className="flex flex-col">
              {filteredOptions.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-full px-3 py-2 text-left hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    handleChange(option);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="px-3 py-2 text-gray-500">No hay opciones</div>
          )}
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />}
    </div>
  );
}
