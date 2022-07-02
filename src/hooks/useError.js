import {useCallback, useEffect, useState} from 'react';

import {isValidError} from '@/utils';

const useError = hasError => {
    const [error, setError] = useState();

    useEffect(() => {
        if (isValidError(hasError)) {
            setError(hasError);
        } else {
            setError(undefined);
        }
    }, [hasError]);

    const handleChange = useCallback((e, onChange) => {
        setError(undefined);
        onChange?.(e);
    }, []);

    const setField = useCallback((name, value, onChange) => {
        setError(undefined);
        onChange?.(name, value);
    }, []);

    return [handleChange, error, setField];
};

export default useError;
