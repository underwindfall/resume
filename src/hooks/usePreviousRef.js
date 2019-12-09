import { useEffect, useRef } from 'react';

export const usePreviousRef = value => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};
