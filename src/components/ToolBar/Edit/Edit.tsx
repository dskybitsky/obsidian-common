import React from 'react';

export interface EditProps {
    label: string;
    value?: string;
    onChange: (value: string) => void;
}

export const Edit = ({ label, value, onChange }: EditProps) => (
    <input
        type="text"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />
);
