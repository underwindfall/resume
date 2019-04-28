import React from 'react';

export const ScreenContainer = ({ children, style, ...props }) => (
    <div
        style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            ...style
        }}
        {...props}
    >
        {children}
    </div>
);
