import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {FaSpellCheck} from 'react-icons/fa';
import {Stack, useTheme, VStack} from '@chakra-ui/react';

import {TextInput, Box} from '@/components';

const Autocomplete = ({
    name,
    isDisabled,
    label,
    suggestions,
    onChange,
    startToShow,
    field,
    form,
    size,
    ...props
}) => {
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const containerRef = useRef();
    const inputRef = useRef();
    const theme = useTheme();

    const handleChange = e => {
        const {value} = e.target;
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        onChange?.(e);
        field?.onChange(e);
        if (value.length >= startToShow) {
            const filtered = suggestions.filter(
                suggestion => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
            );
            setShowSuggestions(true);
            setFilteredSuggestions(filtered);
        }
    };

    const handleClick = e => {
        onChange?.({target: {id: name, value: e.currentTarget.innerText}});
        form?.setFieldValue(field?.name, e.currentTarget.innerText);
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            onChange({...e, target: {...e.target, id: name, value: filteredSuggestions[activeSuggestion]}});
            setActiveSuggestion(0);
            setShowSuggestions(false);
            setFilteredSuggestions([]);
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            setActiveSuggestion(activeSuggestion - 1);
        } else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            setActiveSuggestion(activeSuggestion + 1);
        }
    };

    const handleClickOutside = e => {
        if (!containerRef?.current?.contains(e.target)) {
            setShowSuggestions(false);
        }
    };

    const handleClickInside = () => {
        if (filteredSuggestions.length) {
            setShowSuggestions(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleMouseOver = e => {
        const suggestionIndex = filteredSuggestions.findIndex(suggestion => suggestion === e.currentTarget.innerText);
        if (suggestionIndex >= 0) {
            setActiveSuggestion(suggestionIndex);
        }
    };

    useEffect(() => {
        if (inputRef?.current?.value.length < startToShow) {
            setShowSuggestions(false);
        }
    }, [inputRef]);

    useEffect(() => {
        if (
            suggestions.length > 0
            && showSuggestions
            && filteredSuggestions.length === 0
            && inputRef?.current?.value.length >= startToShow
        ) {
            setFilteredSuggestions(suggestions);
        }
    }, [suggestions]);

    return (
        <VStack
            position="relative"
            data-testid={`autocomplete-container-${field?.value || name}`}
            ref={containerRef}
            display="block"
        >
            <TextInput
                label={label}
                data-testid={`autocomplete-${field?.value || name}`}
                name={field?.value || name}
                onChange={handleChange}
                onKeyDown={onKeyDown}
                onFocus={handleClickInside}
                disabled={isDisabled}
                iconLeft={<FaSpellCheck/>}
                value={field?.value}
                form={form}
                field={field}
                innerRef={inputRef}
                size={size}
                {...props}
            />
            {!isDisabled && filteredSuggestions.length > 0 && showSuggestions && (
                <Stack
                    data-testid={`autocomplete-list-${field?.value || name}`}
                    position="absolute"
                    bg="brand.white"
                    zIndex={theme?.zIndices?.dropdown}
                    pl={10}
                    pr={10}
                    borderRadius={5}
                    boxShadow={theme?.shadows?.base}
                >
                    {filteredSuggestions.map((suggestion, index) => (
                        <Box
                            variant={index === activeSuggestion ? 'suggestionWithActive' : 'suggestion'}
                            data-testid={`autocomplete-suggestions-${field?.value || name}`}
                            key={suggestion}
                            onClick={handleClick}
                            onMouseOver={handleMouseOver}
                            cursor="pointer"
                            fontSize={size}
                        >
                            {suggestion}
                        </Box>
                    ))}
                </Stack>
            )}
        </VStack>
    );
};

Autocomplete.propTypes = {
    suggestions: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    startToShow: PropTypes.number,
    isDisabled: PropTypes.bool,
    form: PropTypes.shape({
        setFieldValue: PropTypes.func
    }),
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }),
    size: PropTypes.string
};

Autocomplete.defaultProps = {
    name: undefined,
    size: undefined,
    onChange: undefined,
    suggestions: [],
    startToShow: 3,
    label: undefined,
    isDisabled: false,
    form: undefined,
    field: undefined
};

export default Autocomplete;
