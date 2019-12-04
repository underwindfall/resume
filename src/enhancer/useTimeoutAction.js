import { useEffect, useRef, useState } from 'react';

export const useTimeoutAction = action => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const timerRef = useRef(null);
    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    const handleAction = () => {
        if (!loading) {
            setLoading(true);
            setSuccess(false);
            timerRef.current = setTimeout(() => {
                setLoading(false);
                setSuccess(true);
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
