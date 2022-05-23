import {useMemo, useState} from 'react';

const useBoolean = initialState => {
    const [value, setValue] = useState(initialState);
    const callbacks = useMemo(
        () => ({
            on: () => setValue(true),
            off: () => setValue(false),
            toggle: () => setValue(prev => !prev)
        }),
        []
    );
    return [value, callbacks];
};

export default useBoolean;
