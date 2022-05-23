import {useCallback, useRef} from 'react';

const useEvent = callback => {
    const ref = useRef(() => {
        throw new Error('Cannot call an event handler while rendering.');
    });
    ref.current = callback;
    return useCallback((...args) => ref.current?.apply(null, args), []);
};

export default useEvent;
