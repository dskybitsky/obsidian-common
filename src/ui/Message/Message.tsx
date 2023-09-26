import React, { ReactNode } from 'react';
import './Message.css';

export interface MessageProps {
    children?: ReactNode,
    severity?: 'error' | 'warning' | 'info'
}

export const Message = ({ children, severity = 'info' }: MessageProps) => (
    <div className={`message ${severity}`}>
        {children}
    </div>
);
