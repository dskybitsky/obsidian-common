import React from 'react';
import './ToolBar.css';

export interface ToolBarProps {
    children?: React.ReactNode[];
}

export const ToolBar = ({ children }: ToolBarProps) => (
    <div className="toolbar">{children}</div>
);
