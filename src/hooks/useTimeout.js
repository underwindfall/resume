import { useEffect, useRef } from 'react';
import { useSetState } from './useSetState';

export const useTimeout = action => {
    const [state, setState] = useSetState({
        loading: false,
        success: false
    });

    const { loading, success } = state;

    const timerRef = useRef();
    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    const handleAction = () => {
        if (!loading) {
            setState({
                loading: true,
                success: false
            });
            timerRef.current = setTimeout(() => {
                setState({
                    loading: false,
                    success: true
                });
                action();
            }, 2000);
        }
    };

    return {
        handleAction,
        loading,
        success
    };
};
