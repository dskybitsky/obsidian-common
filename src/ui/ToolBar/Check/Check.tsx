import React from 'react';
import './Check.css';

export interface CheckProps {
    label: string;
    checked?: boolean;
    onChange: (value: boolean) => void;
}

export const Check = ({ label, checked = false, onChange }: CheckProps) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="toolbar-check">
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        {label}
    </label>
);
