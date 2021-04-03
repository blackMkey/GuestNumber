import { useState, useEffect } from 'react';

export const WindowDimensions = () => {
    const [size, setSize] = useState('');
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 768 && size !== 'lg'){
                setSize('lg');
            }
            else if(window.innerWidth < 768 && window.innerWidth>=576 && size !== 'md'){
                setSize('md');
            }
            else if(window.innerWidth<576 && size !== 'sm'){
                setSize('sm');
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
    }, [size]);
    return size;
};