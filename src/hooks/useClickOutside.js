import {useEffect} from 'react';

const useClickOutside = (ref, callback) => {
    const handleClickOutside = event => {
        if (!ref || !ref?.current?.contains(event.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
};

export default useClickOutside;
