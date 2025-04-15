import React from 'react';
import {ChevronDownIcon} from './Icons';

export default function Select({
  options = [],
  loading = false,
  onClean,
  placeholder = '[Seleccione]',
  disabled = false,
  keyValue = 'value',
  name,
  value,
  onSelect
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = selectedValue => {
    onSelect(name, selectedValue ? selectedValue[keyValue] : undefined);
    if (onClean) {
      onClean(form);
    }
  };

  const selectedValue = React.useMemo(() => options.find(option => option[keyValue] === value) || {}, [value]);

  const filteredOptions = React.useMemo(() => {
    if (!searchTerm) return options;
    return options.filter(option => option.label?.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [options, searchTerm]);

  return (
    <div className="w-full relative">
      <div className="relative">
        <input
          type="text"
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white cursor-pointer'
          }`}
          placeholder={placeholder}
          value={selectedValue.label || ''}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onChange={e => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          disabled={disabled}
          readOnly={!isOpen}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {loading ? (
            <div className="px-3 py-2 text-gray-500">Cargando...</div>
          ) : filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                onClick={() => {
                  handleChange(option);
                  setIsOpen(false);
                  setSearchTerm('');
                }}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-500">No hay opciones</div>
          )}
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />}
    </div>
  );
}
