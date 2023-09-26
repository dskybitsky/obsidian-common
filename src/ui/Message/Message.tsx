import React from 'react';
import './Message.css';

export interface MessageProps {
    text: string,
    severity?: 'error' | 'warning' | 'info'
}

export const Message = ({ text, severity = 'error' }: MessageProps) => (
    <div className={`message ${severity}`}>
        {text}
    </div>
);
