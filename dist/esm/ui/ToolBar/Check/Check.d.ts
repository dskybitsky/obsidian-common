import React from 'react';
import './Check.css';
export interface CheckProps {
    label: string;
    checked?: boolean;
    onChange: (value: boolean) => void;
}
export declare const Check: ({ label, checked, onChange }: CheckProps) => React.JSX.Element;
