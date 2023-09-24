import React, { ReactNode } from 'react';
import './ToolBar.css';

export interface ToolBarProps {
    children?: ReactNode;
}

export const ToolBar = ({ children }: ToolBarProps) => (
    <div className="toolbar">{children}</div>
);
