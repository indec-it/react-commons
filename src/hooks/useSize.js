import {useEffect, useState} from 'react';

const useSize = demoRef => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(e => {
            // Depending on the layout, you may need to swap inlineSize with blockSize
            // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
            setWidth(e[0].contentBoxSize[0].inlineSize);
            setHeight(e[0].contentBoxSize[0].blockSize);
        });

        if (demoRef) {
            resizeObserver.observe(demoRef.current);
        }
    }, [demoRef]);

    return [width, height];
};

export default useSize;
