import React, { ReactNode } from 'react';
import './Message.css';
export interface MessageProps {
    children?: ReactNode;
    severity?: 'error' | 'warning' | 'info';
}
export declare const Message: ({ children, severity }: MessageProps) => React.JSX.Element;
