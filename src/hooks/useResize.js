import {useState, useLayoutEffect} from 'react';

const useResize = () => {
    const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight});

    useLayoutEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
};

export default useResize;
